import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';




function About(props) {

  

    return(
        <div className='col-12 col-lg-9 main_block'>
            <div className="row breadcrumb__row">
                <Breadcrumb className="custom-breadcrumb">
                    <BreadcrumbItem><Link to="/home">Главная</Link></BreadcrumbItem>
                    <BreadcrumbItem active>О проекте</BreadcrumbItem>
                </Breadcrumb>              
            </div>
            <hr />
            <div className="col-12 about__content">
                <blockquote className="blockquote">
                    <p >Там, где асфальт, ничего интересного,&nbsp;а&nbsp;где&nbsp;интересно,<br/> там нет асфальта.</p>
                    <footer className="blockquote-footer">Аркадий и Борис Стругацкие,
                    <cite title="Source Title">citatnica.ru</cite>
                    </footer>
                </blockquote>
                <hr/>
                <div className="row row-content about__row">
                    <div className="col-12 col-md-12 col-lg-6">
                        <p className="about__info">Проект только развивается. Наша цель - помочь роллерам комфортно передвигаться по городу и вовремя узнавать о перекопанных улицах и плохих дорогах, которые могут не только уменьшить удовольствие от поездки, но и навредить здоровью.</p>

                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <Card className="about__card">
                            <CardHeader className="about__card-header">Информация о проекте</CardHeader>
                            <CardBody className="about__card-body">
                                <dl className="row p-1">
                                    <dt className="col-6">Начало работы над проектом</dt>
                                    <dd className="col-6">08 апреля 2020</dd>
                                    <dt className="col-6">Инициаторы</dt>
                                    <dd className="col-6">2</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className=" about__team">
                    <div className="about__title">Наша команда</div>
                    <div className="row about__items">
                        <div className="about__item col-12 col-md-5">
                            <div className="about__img"></div>
                            <div className="about__surname">Винеров</div>
                            <div className="about__name">Илья</div>
                            <div className="about__biography">Главный идеолог, разработчик карты&nbsp;и, конечно&nbsp;же, роллер. Большая часть маршрутов на&nbsp;сайте&nbsp;&mdash; его детище.</div>

                        </div>
                        <div className="about__item col-12 col-md-5">
                            <div className="about__img"></div>
                            <div className="about__surname">Беликова</div>
                            <div className="about__name">Анна</div>
                            <div className="about__biography">Веб-разработчик сайта ПнКО,<br/> роллер.</div>

                        </div>
                    </div>
                    
                </div>              
            </div>
            </div>
   
    );
}

export default About;   


