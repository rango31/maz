import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';

function Install({installable, handleInstallClick}){
    return (
        <> 
            {
                installable &&
                <div style={{width:"100vw", backgroundColor: "brown", padding: "10px",paddingRight:"0px",display:"flex", justifyContent: "center"}}>
                        <div
                            style={{width:"100vw",maxWidth:"1080px", display: "flex", justifyContent: "flex-end", paddingRight:"0px"}}
                        >
                            <Button type="primary" onClick={handleInstallClick} style={{marginRight:"15px"}} icon={<DownloadOutlined />}>
                                 Install App
                            </Button>
                        </div>
                </div>
            }
        </>
    );
}

export default Install;