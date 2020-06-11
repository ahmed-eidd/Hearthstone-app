import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Classes.module.css';
import ClassesIcon from './ClassesIcon/ClassesIcon';
import Spinner from '../../components/UI/Spinner/Spinner';
import Pagintaion from './Pagination/Pagination';

const Classes = () => {
  // state = {
  //   cards: [],
  //   error: null,
  //   loading: false,
  // };
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('Priest');
  const [active, setActive] = useState(query);
  const [classesList, setClasses] = useState([
    'Priest',
    'Shaman',
    'Rogue',
    'Paladin',
    'Warrior',
    'Druid',
    'Mage',
    'Hunter',
    'Warlock',
  ]);
  const [currentPage, setCurrnetPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(15);
  const [pageActive, setPageActive] = useState(currentPage);

  useEffect(() => {
    setLoading(true);
    setCurrnetPage(1);
    setPageActive(1);
    const URL = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${query}?collectible=1`;
    axios
      .get(URL, {
        headers: {
          'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '6cad9a4fb4msh9c34bf13bb9f838p1f784fjsna38b9c34760a',
        },
      })
      .then((response) => {
        const data = response.data.filter((card) => card.type !== 'Hero');
        // const data = response.data.Classic.filter( card => card.artist);
        // const data = response.data
        setCards(data);
        console.log(response.data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Something Went Wrong! Sorry.');
        console.log('error ' + error);
        setLoading(false);
      });
  }, [query]);

  const setClassesQuery = (classQuery, id) => {
    setQuery(classQuery);
    setActive(classQuery);
  };

  // Pagintaion
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const CardsForPagination = cards.slice(indexOfFirstCard, indexOfLastCard);

  const cardPaginationHandler = (pageNumber) => {
    setCurrnetPage(pageNumber);
    setPageActive(pageNumber);
  };

  let mainContent = (
    <React.Fragment>
      <div className={classes.imgContainer}>
        {CardsForPagination.map((card) => (
          <img key={card.cardId} src={card.img} />
        ))}
      </div>
      <Pagintaion
        totalCards={cards.length}
        CardsPerPage={cardsPerPage}
        Paginate={cardPaginationHandler}
        paginationActive={pageActive}
      />
    </React.Fragment>
  );
  if (loading) {
    mainContent = <Spinner />;
  }
  let errorMsg = null;
  if (error) {
    errorMsg = <p style={{ fontSize: '40px', color: '#ffffff' }}>{error}</p>;
  }
  return (
    <div className={classes.classesContainer}>
      <h1>Hearthstone App</h1>
      <ul className={classes.iconList}>
        {classesList.map((el, i) => (
          <ClassesIcon
            key={i}
            active={active}
            iconClicked={() => setClassesQuery(el)}
            iconClasses={
              el === active
                ? [classes.icon, classes.active].join(' ')
                : classes.icon
            }
          >
            {el}
          </ClassesIcon>
        ))}
      </ul>
      {mainContent}

      {errorMsg}
    </div>
  );
};

export default Classes;
