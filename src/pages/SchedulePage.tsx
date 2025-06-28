import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

const imageMap: { [key: string]: string } = {
  '7-10': '诺华IMMU-h5_6全体大会日程6.jpg',
  '7-11-kst': '诺华IMMU-h5_7可善挺品牌日及培训日日程长图文7.jpg',
  '7-11-zl': '诺华IMMU-h5_8茁乐品牌日及培训日日程8.jpg',
  '7-12': '诺华IMMU-h5_英雄演武场全部日程长图文9.jpg',
};

const SchedulePage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const imageName = type ? imageMap[type] : '';

  if (!imageName) {
    return <div style={{color:'#003399', fontSize:'2rem', textAlign:'center', marginTop:'40vh'}}>未找到对应日程</div>;
  }

  return (
    <div style={{width:'100vw',height:'100vh',overflowY:'auto',background:'#003399', position:'relative', paddingBottom:'150px'}}>
      <img
        src={process.env.PUBLIC_URL + '/images/' + imageName}
        alt="会议日程"
        style={{width:'100%',height:'auto',display:'block'}}
      />
      <BackButton />
    </div>
  );
};

export default SchedulePage;