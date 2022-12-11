import './css/Modal.css';
import { useNavigate } from 'react-router-dom';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function Modal({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <div id="modal" onClick={() => { navigate(-1) }}></div>
      <div id="modal-wrapper">
        <button id="modal-close-btn" title="Close" onClick={() => { navigate(-1) }}><CancelRoundedIcon /></button>
        {children}
      </div>
    </>
  )
}