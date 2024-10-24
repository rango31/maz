import { Image , Divider, FloatButton, Timeline} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Program(){
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
                            <Divider style={{marginTop: "5vh", marginBottom: "5vh"}} orientation="left">Program</Divider>

                            <Timeline
                                items={[
                                {
                                    children: 'Create a services site 2015-09-01',
                                },
                                {
                                    children: 'Solve initial network problems 2015-09-01',
                                },
                                {
                                    children: 'Technical testing 2015-09-01',
                                },
                                {
                                    children: 'Network problems being solved 2015-09-01',
                                },
                                ]}
                            />
                          
                        </div>
                    
                    </center>

                    
        
        </div>
       
       </center>
        
    );
}

export default Program;