import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row"> 
                <div className="col-2 col-sm-2 footer-first">
                    <a class="logo_complex lofo_footer" href="/">
                                <div class='logo'>ПнК</div>
                                <svg class="logo_wheel" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
                                 <g>
                                  <ellipse fill="none" stroke="#F0F4F8" stroke-width="30" cx="110.000003" cy="110.000002" id="svg_1" rx="90" ry="90"/>
                                  <ellipse fill="none" stroke="#bbbbbb" stroke-width="10" cx="110.000003" cy="110.000002" id="svg_3" rx="60" ry="60"/>
                                  <ellipse fill="none" stroke="#bbbbbb" stroke-width="10" cx="109.999998" cy="110.000003" id="svg_5" rx="20" ry="20"/>
                                  <ellipse fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="110.000002" cy="69.325903" id="svg_8" rx="11.5" ry="7.5" transform="rotate(90, 110, 69.3259)"/>
                                  <ellipse fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="109.999998" cy="150.692763" id="svg_9" rx="11.5" ry="7.5" transform="rotate(90, 110, 150.693)"/>
                                  <ellipse fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="150.302076" cy="109.999997" id="svg_14" rx="11.5" ry="7.5"/>
                                  <ellipse fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="69.935217" cy="110" id="svg_15" rx="11.5" ry="7.5"/>
                                  <ellipse transform="rotate(-45, 142.302, 83)" fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="142.302076" cy="82.999997" id="svg_4" rx="11.5" ry="7.5"/>
                                  <ellipse transform="rotate(-45, 80.3021, 137)" fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="80.302076" cy="136.999997" id="svg_6" rx="11.5" ry="7.5"/>
                                  <ellipse transform="rotate(45, 140.302, 136)" fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="140.302076" cy="135.999997" id="svg_16" rx="11.5" ry="7.5"/>
                                  <ellipse transform="rotate(45, 82.3021, 81)" fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="82.302076" cy="80.999997" id="svg_17" rx="11.5" ry="7.5"/>
                                 </g>
                                </svg>
                            </a>
                            <div className="footer__copyright">© ПИТЕР НА КОЛЕСАХ</div>
                </div>
                <div className="col-3 col-sm-3">
                    
                    <div className="footer__menu list-unstyled">
                        <div className="footer__title">МЕНЮ</div>
                        <div className="footer__links">
                            <Link className="footer__link" to='/aboutus'>О&nbsp;проекте</Link>
                            <Link className="footer__link" to='/news'>Новости</Link>
                            <Link className="footer__link" to='/routes'>Маршруты</Link>
                            <Link className="footer__link" to='/contactus'>Контакты</Link>
                        </div>
                    </div>
                </div>
                <div className="col-3 col-sm-3">
                    <div className="footer__title">КОНТАКТЫ</div>
                    <div className="footer__contacts">
		              <a className="footer__phone" href=""><i className="fa fa-phone fa-lg"></i> +852 1234 5678</a>
		              <a className="footer__email" href="mailto:bel4onok_spb@mail.ru"><i className="fa fa-envelope fa-lg"></i>
                          bel4onok_spb@mail.ru</a>
                    </div>
                </div>
                <div className="col-12 col-sm-4 center">
                    <div className="footer__title center">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</div>
                    <div className="btn__socials center">
                        <a className=" btn__social " href="/"><i className="fa fa-vk"></i>&nbsp;</a>
                        <a className=" btn__social " href="/"><i className="fa fa-facebook"> </i>&nbsp;</a>
                        <a className=" btn__social " href="/"><i className="fa fa-linkedin"> </i>&nbsp;</a>
                        <a className=" btn__social " href="/"><i className="fa fa-twitter"> </i>&nbsp;</a>
                        <a className=" btn__social " href="/"><i className="fa fa-youtube"> </i>&nbsp;</a>
                        <a className=" btn__social" href="mailto:bel4onok_spb@mail.ru"><i className="fa fa-envelope-o"> </i>&nbsp;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;