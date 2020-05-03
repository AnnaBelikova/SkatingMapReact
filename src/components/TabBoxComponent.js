import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

function RenderNewsListItem({article, onClick}){
    return(
            <Link className="newslist_item__title" to={`/news/${article.id}`} >
             
                    <span>{article.title}</span>
                    <i className="fa fa-hand-o-right" aria-hidden="true"></i>
             
            </Link>
    );
}

function RenderRouteListItem({route, onClick}){
    return(
            <Link className="newslist_item__title" to={`/routes/${route.id}`} >
             
                    <span>{route.title}</span>
                    <i className="fa fa-hand-o-right" aria-hidden="true"></i>
             
            </Link>
    );
}

const TabBox = (props) => {

const [activeTab, setActiveTab] = useState('1');
 const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }


        const newsList = props.articles.map((article) => {
            return (
                <div className="newslist__item m-1"  key={article.ind}>
                    <RenderNewsListItem article={article} onClick={props.onClick} />
                </div>
            );
        });
        const routesList = props.routes.map((route) => {
            return (
                <div className="newslist__item m-1"  key={route.id}>
                    <RenderRouteListItem route={route} onClick={props.onClick} />
                </div>
            );
        });

        return (
<div>

<Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Новости
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Маршруты
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <div className="news_list">
                    {newsList}
                </div>
          </Row>
        </TabPane>
 <TabPane tabId="2">
          <Row>
             <div className="routes_list">
                    {routesList}
                </div>
          </Row>
        </TabPane>

</TabContent>
                
               
</div>
        );
    }

export default TabBox;