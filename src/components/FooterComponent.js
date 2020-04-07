import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Главная</Link></li>
                        <li><Link to='/aboutus'>О проекте</Link></li>
                        <li><Link to='/news'>Новости</Link></li>
                        <li><Link to='/routes'>Маршруты</Link></li>
                        <li><Link to='/contactus'>Контакты</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Мы спим тут</h5>
                    <address>
		              Murino<br />
		              Shuvalova 9, 9<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:skate_map@skating.net">
                         skate_map@skating.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i>&nbsp;</a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"> </i>&nbsp;</a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"> </i>&nbsp;</a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"> </i>&nbsp;</a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"> </i>&nbsp;</a>
                        <a className="btn btn-social-icon" href="mailto:skate_map@skating.net"><i className="fa fa-envelope-o"> </i>&nbsp;</a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Skating Map</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;