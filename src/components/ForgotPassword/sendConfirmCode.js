const sendConfirmCode = async (navigate, email) => {
    const localObj = JSON.stringify({ email, retryTime: parseInt(Date.now() / 1000) + 59 });
    localStorage.setItem('recovery', localObj);
    navigate('/forgot/' + Math.random().toString().split(".")[1]);
    // console.log(data);
}

export default sendConfirmCode;