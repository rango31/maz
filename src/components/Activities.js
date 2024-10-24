import { Image , Divider, FloatButton, Timeline} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Activities(){
    const navigate = useNavigate();

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
                     <FloatButton
                        onClick={()=>{ navigate("/")}}
                        style={{ width: "75px", height: "75px" }}
                        tooltip={<div>Go Back to Home</div>}
                        icon={<HomeOutlined />}
                    />
                    <center>
                        <Image
                            style={{
                                borderRadius: "20px",
                                marginTop: "5vh",
                                width:"90vw",
                                maxWidth:"1000px"
                            

                            }}
                            maxWidth={1000}
                            src="images/AppBanner.jpg"
                        />

                        <div
                         style={{
                            borderRadius: "20px",
                            marginTop: "3vh",
                            width:"90vw",
                            maxWidth:"1000px"
                        }}
                        >
                            <Divider style={{marginTop: "5vh", marginBottom: "5vh"}} orientation="left">Activities / Night Events</Divider>

                            <Timeline
                                style={{marginLeft:"-260px", width: '98vw'}}
                                mode={"left"}
                                items={[
                                {
                                    label: 'Day 1',
                                    children: (
                                        <div style={{marginLeft:"-75px"}}>
                                          <small>23 October 2024 | 1830hrs<br/></small>
                                          <small>Dinner Opening Night<br/></small>
                                          <small>Boma Dress - Smart Casual<br/></small>
                                        </div>
                                      ),
                                },
                                {
                                    label: 'Day 2',
                                    children: (
                                        <div style={{marginLeft:"-75px"}}>
                                          <small>24 October 2024<br/></small>
                                          <small>NATFOODS Presisdent's Dinner - A'ZAMBEZI<br/></small>
                                          <small>Theme: Neo Retro 80s/90s classics<br/></small>
                                        </div>
                                      ),
                                },
                                {
                                    label: 'Day 3',
                                    children: (
                                        <div style={{marginLeft:"-75px"}}>
                                          <small>25 October 2024<br/></small>
                                          <small>Closing game night dinner | Bush Dinner<br/></small>
                                          <small>Smart Casual</small>
                                        </div>
                                      ),
                                },
                                ]}
                            />
                          
                        </div>
                    
                    </center>

                    
        
        </div>
       
       </center>
        
    );
}

export default Activities;