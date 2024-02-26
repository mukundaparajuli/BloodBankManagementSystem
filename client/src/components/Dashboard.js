import React, { useState } from 'react'
import Header from './Header'
import MainDisplay from './MainDisplay'

const Dashboard = () => {
    const [showDetail, setShowDetail] = useState(0);
    return (
        <div>
            <Header showDetail={showDetail} setShowDetail={setShowDetail} />
            <MainDisplay showDetail={showDetail} />
        </div>
    )
}

export default Dashboard