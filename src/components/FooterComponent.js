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
                        <li><Link to='/aboutus'>О&nbsp;проекте</Link></li>
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
                        <a className=" btn__social " href="/"><i className="fa fa-vk"></i>&nbsp;</a>
                        <a className=" btn__social " href="/"><i className="fa fa-facebook"> </i>&nbsp;</a>
                        <a className=" btn__social " href="/"><i className="fa fa-linkedin"> </i>&nbsp;</a>
                        <a className=" btn__social " href="/"><i className="fa fa-twitter"> </i>&nbsp;</a>
                        <a className=" btn__social " href=""><i className="fa fa-youtube"> </i>&nbsp;</a>
                        <a className=" btn__social" href="mailto:skate_map@skating.net"><i className="fa fa-envelope-o"> </i>&nbsp;</a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Skater's Map</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;