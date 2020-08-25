import { setAttribute } from './utils';
import User from './User';

interface FlowData {
  users: User[]
}

class Flow {
  constructor() {
    let user = new User({
      name: 'test',
      profession: 'designer',
      bio: '哈哈哈哈😄',
      avatar: '',
      commits: ['test(dasd): 12312']
    });
    this.updateFlowData({
      users: [user]
    });
    let flowPageReady = this.getFlowData();
    if (flowPageReady) {
      console.log("flow page is ready!");
      this.parseFlowPage();
      this.complierFlowPage();
    } else {
      this.initFlowPage();
    }
  }

  // check flow page
  getFlowData() {
    let data: string = figma.root.getPluginData('@figma-flow') || '{}';
    let result: FlowData;
    try {
      result = JSON.parse(data);
    } catch (error) {
      console.log(error);
    }
    return result;
  };

  // update flow data
  updateFlowData(data) {
    if (!data) return;
    try {
      data = JSON.stringify(data);
    } catch (error) {
      console.log(error);
    }
    figma.root.setPluginData('@figma-flow', data);
  }

  // clear flow data
  clearFlowData() { figma.root.setPluginData('@figma-flow', '') };

  changeCurrent() {
    let page = figma.root.findOne(n => n.name === ".Team");
    // figma.currentPage = page;
  }

  // init flow page
  initFlowPage() {
    let flowData = {};
    this.updateFlowData(flowData);
    let newPage = figma.createPage();
    setAttribute(newPage, {
      name: '.Team'
    })
    figma.root.appendChild(newPage);
  }

  // parse page to data
  parseFlowPage() {
    let data = {};
    // let page = figma.root.findOne(n => n.name === ".Team");
    let page = figma.root.children[0];
    console.log(page);
    return data;
  }

  // complier data to page
  complierFlowPage() {
    let page = figma.root.findOne(n => n.name === ".Team");
    let { users } = this.getFlowData();
    let usersFrame = figma.createFrame();
    setAttribute(usersFrame, {
      name: 'Team-Frame',
      x: 0,
      y: 0
    })
    // user-card {400, 600}, margin {50, 50}
    usersFrame.resize(400 * users.length + 100, 600 + 100);
    users.forEach(user => {
      let cardFrame = figma.createFrame();
      setAttribute(usersFrame, {
        name: user.name,
        x: 50,
        y: 50
      });
      cardFrame.resize(400, 600);
    })
  }

}

export default Flow;