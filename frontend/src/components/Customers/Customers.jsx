import './Customers.css';


function Customers() {
    

    return (
        <section className='customers'>
            <h2>Wat vinden onze klanten?</h2>
            <ul>
                <li className='customer'>
                    <img src="/images/user.png" alt="" />
                    <div>
                        <h4>Menno Vlaming</h4>
                        <p>“Super gezellige busreis gehad naar Awakenings en top geregeld”</p>
                    </div>
                </li>

                <li className='customer'>
                    <img src="/images/user.png" alt="" />
                    <div>
                        <h4>Menno Vlaming</h4>
                        <p>“Super gezellige busreis gehad naar Awakenings en top geregeld”</p>
                    </div>
                </li>
                
            </ul>
        </section>
    );
}

export default Customers;
