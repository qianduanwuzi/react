import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Nav1 from '../components/nav1';
import menuList from "./menu";
import "./index.css";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menuList
    };
  }
  componentDidMount() {}

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }
  render() {
    const { menuList } = this.state;
    const MenuItem = menuList.map((one, index) => {
      return (
        <Menu.Item key={index}>
          <Link to={one.url}>
            <Icon type="user" />
            <span>{one.name}</span>
          </Link>
        </Menu.Item>
      );
    });
    console.log(this.props.children);
    return (
      <div>
        <Layout className="in_container">
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
              {MenuItem}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
            <Route path="/nav1" component={Nav1}/>
            </Content>
          </Layout>
        </Layout>
    
      </div>
    );
  }
}
export default Home;
