import { Image , Col, Row, Divider, Card, QRCode} from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function Header(){

    const [shared, setShared] = useState(false);

    return (
        <center>
        <div 
                style={
                    {
                        backgroundColor: "#98824f",
                        height: "11vh",
                        borderBottomLeftRadius: "30px",
                        borderBottomRightRadius: "30px",
                        maxWidth: "1080px",
                        marginBottom:"5vh"
                    }
                }>
                    <center>
                        <Image
                            style={{
                                borderRadius: "20px",
                                marginTop: "5vh",
                                width:"90vw",
                                maxWidth:"1000px"
                            

                            }}
                            maxWidth={1000}
                            src="/images/AppBanner.jpg"
                        />

                        <div
                         style={{
                            borderRadius: "20px",
                            marginTop: "3vh",
                            width:"90vw",
                            maxWidth:"1000px"
                        }}
                        >
                            <Divider style={{marginTop: "5vh", marginBottom: "5vh"}} orientation="left">Home</Divider>
                            <Row gutter={16}>
                            
                                <Col className="gutter-row" span={8}>
                                    <Link to="/events">
                                    <Card
                                        hoverable
                                        cover={<img style={{width:'12vw', marginTop:"3vh", maxWidth: "75px"}} alt="example" src="/images/Events.png" />}
                                    >
                                        <Meta title="Events" />
                                    </Card>
                                    </Link>
                                
                                </Col>
                                <Col className="gutter-row" span={8}>
                                <Link to="/speakers">
                                    <Card
                                        hoverable
                                        cover={<img style={{width:'12vw', marginTop:"3vh", maxWidth: "75px"}} alt="example" src="/images/Speaker.png" />}
                                    >
                                        <Meta title="Speakers" />
                                    </Card>
                                    </Link>
                                
                                </Col>
                                <Col className="gutter-row" span={8}>
                                <Link to="/activities">
                                    <Card
                                        hoverable
                                        cover={<img style={{width:'12vw',marginTop:"3vh", maxWidth: "75px"}} alt="example" src="/images/Activities.png" />}
                                    >
                                        <Meta title="Activities" />
                                    </Card>
                                    </Link>
                                
                                </Col>
                             
                            </Row>
                            <Row gutter={16} style={{marginTop: "2vh", marginBottom: "5vh"}}>
                            
                            <Col className="gutter-row" span={8}>
                            <Link to="/program">
                                <Card
                                    hoverable
                                    cover={<img style={{width:'12vw', marginTop:"3vh", maxWidth: "75px"}} alt="example" src="/images/Program.png" />}
                                >
                                    <Meta title="Program" />
                                </Card>
                                </Link>
                            
                            </Col>
                            <Col className="gutter-row" span={8}>
                            <Link to="/sponsors">
                                <Card
                                    hoverable
                                    cover={<img style={{width:'12vw', marginTop:"3vh", maxWidth: "75px"}} alt="example" src="/images/sponsors.png" />}
                                >
                                    <Meta title="Sponsors" />
                                </Card>
                                </Link>
                            
                            </Col>
                            <Col className="gutter-row" span={8} >
                        
                                <Card
                                    onClick={()=>{setShared(!shared)}}
                                    hoverable
                                    cover={<img style={{width:'12vw',marginTop:"3vh", maxWidth: "75px"}} alt="example" src="/images/qr.jpg" />}
                                >
                                    <Meta title="Share" />
                                </Card>
                            
                            </Col>
                         
                        </Row>
                           
                            {
                                shared?
                                <>
                                <Divider style={{marginTop: "5vh", marginBottom: "5vh"}} orientation="left">Scan me</Divider>
                                <QRCode
                                    errorLevel="H"
                                    size={300}
                                    iconSize={300 / 4}
                                    value="https://ant.design/"
                                    icon="/logo192.png"
                                />
                                </>

                                :
                                <></>
                            }
                          
                            <Carousel
                                responsive={responsive}
                                swipeable={true}
                                infinite={true}
                                autoPlay={true}
                                >
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/1.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/2.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/3.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/4.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/5.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/6.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/7.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/8.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/9.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/10.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/11.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/12.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/13.png" /></div>
                                <div><img style={{width:'12vw', marginTop:"3vh", maxWidth: "150px"}} alt="example" src="/images/14.png" /></div>
                            </Carousel>;
                        </div>
                    
                    </center>

                    
        
        </div>
       
       </center>
        
    );
}

export default Header;