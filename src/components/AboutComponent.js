import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';




function About(props) {

  

    return(
        <div className='col-12 col-md-9 main_block'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Главная</Link></BreadcrumbItem>
                    <BreadcrumbItem active>О проекте</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>О проекте</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <p>Проект только развивается. Наша цель - помочь роллерам комфортно передвигаться по городу и вовремя узнавать о перекопанных улицах и плохих дорогах, которые могут не только уменьшить удовольствие от поездки, но и навредить здоровью.</p>
                    
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Факты</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Начало работы над проектом</dt>
                                <dd className="col-6">08 апреля 2020</dd>
                                <dt className="col-6">Начальный капитал</dt>
                                <dd className="col-6">0 рублей и банка кофе</dd>
                                <dt className="col-6">Инициаторы</dt>
                                <dd className="col-6">2</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">А какой смысл покупать машину, чтобы разъезжать по асфальту? Там, где асфальт, ничего интересного, а где интересно, там нет асфальта.</p>
                                <footer className="blockquote-footer">Аркадий и Борис Стругацкие,
                                <cite title="Source Title">citatnica.ru</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
         
        </div>
    );
}

export default About;   


