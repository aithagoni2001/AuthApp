import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom";

const Notfound = ()=>{
    const navigate = useNavigate();
    return (<>
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={()=>{navigate("/login")}} >Back Home</Button>}
  />
    </>

    )
}
export default Notfound;