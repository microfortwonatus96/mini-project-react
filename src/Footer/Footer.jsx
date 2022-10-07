import React from 'react'
import '../Footer/footer.css'

const Footer = () => {
    return (
        <footer>
                <div className="inner-footer">
                    <div className="footer-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus labore dignissimos quia qui ad eum, laudantium cum dolores dolorem ipsam placeat voluptate atque culpa nostrum exercitationem dicta quo a!
                    </div>
                    <div className="contact">
                        <ul className="icons">
                            <h3>Contact Us</h3>
                            <li>Micro Fortwonatus</li>
                            <li>microfortwonatus6@gmail.com</li>
                            <li>08XXXXXXXXXX</li>
                        </ul>
                    </div>
                </div>
                <p className="copyright">
                    Copyright &copy;2022 Micro Fortwonatus | All Rights are reserved.
                </p>
        </footer>
        )
}

export default Footer