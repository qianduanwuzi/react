import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Nav1 from '../components/nav1_index';
import Nav2 from '../components/nav2';
import Nav3 from '../components/nav3';
import Nav4 from '../components/nav4';
import Nav5 from '../components/nav5';
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
    console.log(this.props);
    const {pathname} = this.props.location;
    return (
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
            <Route path="/nav1"  component={Nav1}/>
            <Route path="/nav2"  component={Nav2}/>
            <Route path="/nav3"  component={Nav3}/>
            <Route path="/nav4"  component={Nav4}/>
            <Route path="/nav5"  component={Nav5}/>
            </Content>
          </Layout>
        </Layout>
    );
  }
}
export default Home;
