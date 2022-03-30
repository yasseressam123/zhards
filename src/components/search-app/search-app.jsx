import { faEye, faMagnifyingGlass , faFile , faFileCirclePlus , faCommentDots , faBell , faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from 'react-apexcharts';
import './search-app.css';

const SearchApp = ()=>{
    let statics = [
        {number:720,name:'Subscribers',icon:faEye,divStyle:{backgroundColor: "aliceblue",borderRadius: "50%",padding: "6px 9px"},iconColor:{color: "cornflowerblue"}},
        {number:820,name:'Post', icon:faFile,divStyle:{backgroundColor: "#e4d0f6",borderRadius: "50%",padding: "5px 10px"},iconColor:{color: "blueviolet"}},
        {number:920,name:'Pages', icon:faFileCirclePlus,divStyle:{backgroundColor: "#ffe2be",borderRadius: "50%",padding: "6px 9px"},iconColor:{color: "darkorange"}},
        {number:920,name:'Comments', icon:faCommentDots,divStyle:{backgroundColor: "#d6ffd6",borderRadius: "50%",padding: "6px 9px"},iconColor:{color: "green"}},
    ];
    let friends = [
        {img:'../../assets/boy.jpg' , name:'Lutfhi Chan' , date:'Jan 25,2021'},
        {img:'../../assets/profile.jpg' , name:'Devi Carlos' , date:'Jan 23,2021'},
        {img:'../../assets/boy.jpg' , name:'Danar Comel' , date:'Jan 21,2021'},
        {img:'../../assets/profile.jpg' , name:'Karin lumina' , date:'Jan 19,2021'},
        {img:'../../assets/boy.jpg' , name:'Fandid Deadan' , date:'Jan 17,2021'},
    ];
    let options= {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      }
    let series= [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }]
    return(
        <section className="container-lg my-4">
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="search-input">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <input type="text" className="form-control" placeholder="Search for Statistics" />
                    </div>
                    <div className="cards-items">
                        {
                            statics.map((item)=>{
                                return(
                                    <div className="cards-no" key={item.name}>
                                        <div>
                                            <p className="cards-no-1">{item.number}</p>
                                            <p className="cards-no-2">{item.name}</p>
                                        </div>
                                        <div style={item.divStyle}>
                                            <FontAwesomeIcon style={item.iconColor} icon={item.icon}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="chart">
                        <div className="chart-header">
                            <div className="chart-header-p1">
                                <p>Users</p>
                            </div>
                            <div className="chart-header-p2">
                                <div className="chart-header-p2-cont">
                                    <div></div>
                                    <p>Current month</p>
                                </div>
                                <div className="chart-header-p2-cont past-cont">
                                    <div></div>
                                    <p>Past month</p>
                                </div>
                            </div>
                        </div>
                        <div className="chart-bar">
                            <Chart options={options} series={series} type="bar" height={320} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="mx-3 mt-md-0 mt-4">
                        <div className="notification-bar">
                            <div className="notification-bar-icon">
                                <FontAwesomeIcon icon={faBell}/>
                            </div>
                            <div className="notification-bar-name">
                                <div>
                                    <img src={require('../../assets/pic.png')} alt="profile pic" />
                                </div>
                                <p>Hi,Arinalis!</p>
                            </div>
                        </div>
                        <div className="friends-list">
                            <div className="friends-list-header">
                                <p className="friends-list-header-p1">Discussion</p>
                                <p className="friends-list-header-p2">View All</p>
                            </div>
                            <div>
                                {
                                    friends.map((friend)=>{
                                        return(
                                            <div className="friends-card" key={friend.name}>
                                                <div className="d-flex">
                                                    <div>
                                                        <img src={require('../../assets/pic.png')} alt="" />
                                                    </div>
                                                    <div>
                                                        <p className="friends-card-content-p1">{friend.name}</p>
                                                        <p className="friends-card-content-p2">{friend.date}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchApp;