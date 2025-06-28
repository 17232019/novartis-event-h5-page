import React from 'react';
import BackButton from '../components/BackButton';

const InfoPage: React.FC = () => (
  <div style={{width:'100vw',height:'100vh',overflowY:'auto',background:'#003399', position:'relative', paddingBottom:'150px'}}>
    <img
      src={process.env.PUBLIC_URL + '/images/诺华IMMU-h5_5大会信息5.jpg'}
      alt="大会信息"
      style={{width:'100%',height:'auto',display:'block'}}
    />
    <BackButton />
  </div>
);

export default InfoPage;
