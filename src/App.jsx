import { useState, useEffect, useRef } from 'react';
import './App.css';
import { useRoutes, useNavigate, Link, useLocation } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import { supabase } from '../client';
import '@picocss/pico';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [creators, setCreators] = useState([]);
  const [currentCreator, setCurrentCreator] = useState('');
  const [creatorToEdit, setCreatorToEdit] = useState('');
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(null);

  // Fetch data whenever the route changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: creators, error } = await supabase
          .from('creators')
          .select('*')
          .order('created_at', { ascending: true });
        if (error) throw error;
        setCreators(creators);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [location.pathname]); // Fetch data when location.pathname changes

  const handleCurrentCreator = (creator) => {
    setCurrentCreator(creator);
    navigate(`/${creator.id}`);
  };

  const handleEditCreator = (creator) => {
    setCreatorToEdit(creator);
    navigate(`/edit/${creator.id}`);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  const routes = useRoutes([
    {
      path: '/',
      element: <ShowCreators
        contentCreators={creators}
        isLoading={isLoading}
        handleCurrentCreator={handleCurrentCreator}
        handleEditCreator={handleEditCreator}
        refToScroll={ref} />
    },
    {
      path: '/:id',
      element: <ViewCreator
        contentCreator={currentCreator}
        handleEditCreator={handleEditCreator} />
    },
    {
      path: '/new',
      element: <AddCreator />
    },
    {
      path: 'edit/:id',
      element: <EditCreator creatorToEdit={creatorToEdit} />
    }
  ]);

  return (
    <div>
      <header className="header">
        <h1 className="title-text" style={{ marginBottom: 0 }}>Creatorverse</h1>
        <nav id="navbar">
          <ul>
            <li>
              <Link to="/" role="button" onClick={handleScroll}>
                View All Creators
              </Link>
            </li>
            <li>
              <Link to="new" role="button" onClick={handleScroll}>
                Add Creator
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {routes}
    </div>
  );
}

export default App;

