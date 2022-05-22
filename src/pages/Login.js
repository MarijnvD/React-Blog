import React from 'react';

function Login({getter, setter, auth}) {
    function onClick() {
        setter(!getter);
        console.log("knop wordt geklikt");
    }



    return (
        <div className="page-container">
            <h1>{auth === true ? "hoi, je bent wel ingelogd" : "Je bent niet ingelogd"}</h1>

            <button type="button" onClick={onClick}>
                {auth === true ? "Uitloggen" : "Inloggen"}
            </button>

            <p>{auth === true ? "hier lees je mijn geheime dingen" : "deze info is prive"}</p>
        </div>

    );
}

export default Login;