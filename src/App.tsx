import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import DataSourcesScreen from './components/datasource/screen';
import SearchScreen from './components/search/screen';
import './app.css';

const { Content, Sider } = Layout;


enum RouteKey {
  DATA_SOURCES = 'data-sources',
  SEARCH = 'search',
  TIMELINE_VIEW = 'timeline-view',
  SETTINGS = 'settings'
}


const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(RouteKey.DATA_SOURCES);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        className="app-sidebar"
        collapsible
        collapsed={isSidebarCollapsed}
        onCollapse={(isCollapsed => setIsSidebarCollapsed(isCollapsed))}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedItem]}
          onClick={(item) => setSelectedItem(item.key as RouteKey)}
        >
          <Menu.Item key={RouteKey.DATA_SOURCES}>
            <Icon type="database" />
            <span>Data Sources</span>
          </Menu.Item>
          <Menu.Item key={RouteKey.SEARCH}>
            <Icon type="search" />
            <span>Search</span>
          </Menu.Item>
          <Menu.Item key={RouteKey.TIMELINE_VIEW}>
            <Icon type="line-chart" />
            <span>Timeline View</span>
          </Menu.Item>
          <Menu.Item key={RouteKey.SETTINGS}>
            <Icon type="setting" />
            <span>Settings</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <DataSourcesScreen visible={selectedItem === RouteKey.DATA_SOURCES} />
          <SearchScreen visible={selectedItem === RouteKey.SEARCH} />
        </Content>
      </Layout>
    </Layout>
  );
}


export default App;
