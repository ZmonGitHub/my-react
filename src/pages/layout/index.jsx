import React from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  CarOutlined,
  RadarChartOutlined,
  AppleOutlined,
  GithubOutlined,
  GitlabOutlined,
  TwitterOutlined,
  InsuranceOutlined,
  TaobaoCircleOutlined,
  RiseOutlined
} from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";


import "./index.less"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    list:[
        {
        key:'React',
        icon:<CarOutlined />,
        title:"React",
        children:[
           {key:1,to:"/invoices",name:"Invoices"},
           {key:2,to:"/expenses",name:"expenses"} 
         ]
        },
        {
          key:'Redux',
          icon:<GitlabOutlined />,
          title:"Redux",
          children:[
             {key:100,to:"/invoices",name:"Invoices"},
             {key:101,to:"/expenses",name:"expenses"} 
           ]
        },
        {
          key:'React Router',
          icon:<TwitterOutlined />,
          title:"React Router",
          children:[
            {key:200,to:"/invoices",name:"Invoices"},
            {key:201,to:"/expenses",name:"expenses"} 
          ]
        },
        {
          key:'Nextjs',
          icon:<GithubOutlined />,
          title:"Nextjs",
          children:[
             {key:300,to:"/invoices",name:"Invoices"},
             {key:301,to:"/expenses",name:"expenses"} 
           ]
        },
        {
          key:'Nodejs',
          icon:<TaobaoCircleOutlined />,
          title:"Nodejs",
          children:[
             {key:400,to:"/invoices",name:"Invoices"},
             {key:401,to:"/expenses",name:"expenses"} 
           ]
        },
        {
          key:'Webpack',
          icon:<InsuranceOutlined />,
          title:"Webpack",
          children:[
             {key:500,to:"/invoices",name:"Invoices"},
             {key:501,to:"/expenses",name:"expenses"} 
           ]
        },
        {
          key:'Vue',
          icon:<AppleOutlined />,
          title:"Vue",
          children:[
             {key:600,to:"/invoices",name:"Invoices"},
             {key:601,to:"/expenses",name:"expenses"} 
           ]
        },
        {
          key:'interview',
          icon:<RiseOutlined />,
          title:"Interview",
          children:[
             {key:700,to:"/interveiw",name:"Interveiw"},
             {key:701,to:"/interveiw/react",name:"InterveiwReact"}, 
             {key:702,to:"/interveiw/complexRepeated",name:"complexRepeated"} 
           ]
        }
    ]
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed,list } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
          <Menu.Item key="0" icon={<RadarChartOutlined />}>
              <Link to="/home">主页</Link>
            </Menu.Item>
          {list.map(item =>{
              return (
              <SubMenu key={item.key} icon={item.icon} title={item.title}>
                {item.children.map(childrenItem=>{
                  return (<Menu.Item key={childrenItem.key}><Link to={childrenItem.to}>{childrenItem.name}</Link></Menu.Item>)
                })}
              </SubMenu>
              )
          })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {/* Bill is a cat. */}
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
