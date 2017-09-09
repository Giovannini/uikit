import React from 'react';
import ReactDOM from 'react-dom';

import Title from '../../atoms/headers/Title.jsx';
import SubTitle from '../../atoms/headers/SubTitle.jsx';
import ThirdTitle from '../../atoms/headers/ThirdTitle.jsx';


export default (props) => (
    <div className="headers-kit">
        <Title title="This is a title" />
        <SubTitle title="This is a subtitle" />
        <ThirdTitle title="This is a thirdtitle" />
    </div>
);