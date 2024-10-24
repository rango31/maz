import { Image , Divider, Avatar, List, FloatButton} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Sponsors(){
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
                            <Divider style={{marginTop: "5vh", marginBottom: "5vh"}} orientation="left">Sponsors</Divider>

                            <List
                                itemLayout="horizontal"
                                dataSource={[
                                    {
                                      image: "2"
                                    },
                                    {
                                      image: "1"
                                    },
                                    {
                                      image: "3"
                                    },
                                    {
                                      image: "4"
                                    },
                                    {
                                        image: "5"
                                      },
                                      {
                                        image: "6"
                                      },
                                      {
                                        image: "7"
                                      },
                                      {
                                        image: "8"
                                      },
                                      {
                                        image: "9"
                                      },
                                      {
                                        image: "10"
                                      },
                                      {
                                        image: "11"
                                      },
                                      {
                                          image: "12"
                                        },
                                        {
                                          image: "13"
                                        },
                                        {
                                          image: "14"
                                        }
                                ]}
                                renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar style={{width: "100%", height: "50%"}} src={`images/${item.image}.png`} />}
                                    />
                                </List.Item>
                                )}
                            />
                          
                        </div>
                    
                    </center>

                    
        
        </div>
       
       </center>
        
    );
}

export default Sponsors;