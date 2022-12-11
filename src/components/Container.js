import './css/Container.css';
import { Link } from 'react-router-dom';
// import CircularProgress from '@mui/material/CircularProgress';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCard from './GameCard';

export default function Container(props) {
  const { data, getMoreData, hasMoreData } = props;

  return (
    <>

      <div className="container">
        {props.title && <Link to={props.link} className="container-title-link" aria-label={`Play more games of ${props.category} category`}>
          <h2 className="container-title" style={{padding: "10px"}}>{props.title}</h2>
        </Link>}
        {
          data.length !== 0 &&
          <InfiniteScroll
            dataLength={data.length}
            next={getMoreData}
            hasMore={hasMoreData}
            loader={
              <div style={{
                textAlign: "center",
                margin: "10px 0"
              }}>
                Swipe down to load more...
                {/* <CircularProgress style={{
                  width: "2rem",
                  height: "2rem"
                }} /> */}
              </div>
            }
          >
            <div className="container-row">
              {data && data.map((e) => {
                return (<GameCard key={e.id} {...e} />)
              })}

            </div>
          </InfiniteScroll>
        }
      </div >
    </>
  )
}
