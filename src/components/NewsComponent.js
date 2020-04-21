import React, { Component } from 'react';
import {  Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderNewsItem({article, onClick}){
    return(
        <div className="news__item row">
        
                <div className="col-12 col-md-3"><img width="100%" src={article.image} alt={article.name} /></div>
                <div className="news_item__info col-12 col-md-9">
                    <div className="news_item__title">{article.title}</div>
                    
        
                    <div className="news_item__text"> {article.text} </div>
        
                    <Link to={`/news/${article.id}`} >
                        <Button color="primary" className='news_item__detailbtn'>Подробнее</Button>
                    </Link>
                </div>
            
        </div>
    );
}

    class News extends Component {
 constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleNews = this.handleNews.bind(this);
    }
    
     toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleNews(event) {
        this.toggleModal();
        alert("Заголовок: " + this.news_title.value + " Текст: " + this.news_text.value +
            " Поделись!" );
        
    }
        
    render(){
        const articles = this.props.articles.map((article) => {
            return (
                <div className=' col-12'  key={article.id}>
                    <RenderNewsItem article={article} onClick={this.props.onClick} />
                </div>
            );
        });
        return (
               <div className='col-12 col-md-9 main_block'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Главная</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Новости</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <div className="row title__add">
                            <h3>Новости</h3>
                            <Button color="primary" onClick = {this.toggleModal}>Добавить новость</Button>
                        </div>
                    </div>                
                </div>
                <div className='row news__items'>
                    {articles}
                </div>
 <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} >
                    <ModalHeader toggle = {this.toggleModal} > 
                        Добавь свою новость
                    < /ModalHeader> 
                    <ModalBody>
                        <Form  action="display.php" method="post" onSubmit = {this.handleNews} >
                            <FormGroup >
                                <Label htmlFor = "news_title" > Заголовок < /Label> 
                                <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                            </FormGroup> 
                            <FormGroup >
                                <Label htmlFor = "news_text" > Текст новости < /Label> 
                                <Input type = "textarea" rows="10" id = "news_text" name = "news_text" innerRef = {(input) => this.news_text = input}/> 
                            </FormGroup> 
                            <FormGroup >
                                <Label htmlFor = "news_photo" > Добавить фото < /Label> 
                                <Input type = "file" id = "news_photo" name = "news_photo" innerRef = {(input) => this.news_photo = input}/> 
                            </FormGroup> 
                            <Button type = "submit" value = "submit" color = "primary" > Поделись! < /Button> 
                        </Form> 
                    </ModalBody> 
                </Modal>
            </div>
        )};
    }

export default News;