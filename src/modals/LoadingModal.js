import './css/Modal.css';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import useLoadingContext from '../context/LoadingContext';

export default function Modal({ children }) {
  const { isLoading } = useLoadingContext();
  const navigate = useNavigate();
  return (
    isLoading &&
    <>
      <div id="modal" onClick={() => { navigate(-1) }}></div>
      <div id="loadingModal">
        {children}
        <CircularProgress />
      </div>
    </>
  )
}