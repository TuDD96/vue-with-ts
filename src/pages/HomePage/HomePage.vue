<template>
  <div class="page-container">
    <!-- Quick View START -->
    <div class="quick-view">
      <ul class="quick-view-tabs nav nav-tabs nav-justified" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            href="#config"
            role="tab"
            data-toggle="tab"
          >
            <span>Config</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#quick-view-chat"
            role="tab"
            data-toggle="tab"
          >
            <span>Chat</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#activity" role="tab" data-toggle="tab">
            <span>Activity</span>
          </a>
        </li>
      </ul>
      <div class="tab-content scrollable">
        <!-- config START -->
        <div id="config" role="tabpanel" class="tab-pane fade in active">
          <div class="theme-configurator p-20">
            <div class="m-v-20 border bottom">
              <p class="text-dark text-semibold m-b-0">Solid Header</p>
              <p class="m-b-15">Config header background (solid)</p>
              <div class="theme-selector p-b-20">
                <label>
                  <input type="radio" value="default" name="header-theme" />
                  <span class="theme-color bg-white border"></span>
                </label>
                <label>
                  <input type="radio" value="primary" name="header-theme" />
                  <span class="theme-color bg-primary"></span>
                </label>
                <label>
                  <input type="radio" value="info" name="header-theme" />
                  <span class="theme-color bg-info"></span>
                </label>
                <label>
                  <input type="radio" value="success" name="header-theme" />
                  <span class="theme-color bg-success"></span>
                </label>
                <label>
                  <input type="radio" value="warning" name="header-theme" />
                  <span class="theme-color bg-warning"></span>
                </label>
                <label>
                  <input type="radio" value="danger" name="header-theme" />
                  <span class="theme-color bg-danger"></span>
                </label>
                <label>
                  <input type="radio" value="dark" name="header-theme" />
                  <span class="theme-color bg-dark"></span>
                </label>
              </div>
            </div>
            <div class="m-v-15 border bottom">
              <p class="text-dark text-semibold m-b-0">Gradient Header</p>
              <p class="m-b-15">Config header background (gradient)</p>
              <div class="theme-selector p-b-15">
                <label>
                  <input
                    type="radio"
                    value="primary-gradient"
                    name="header-theme"
                  />
                  <span class="theme-color bg-gradient-primary"></span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="info-gradient"
                    name="header-theme"
                  />
                  <span class="theme-color bg-gradient-info"></span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="success-gradient"
                    name="header-theme"
                  />
                  <span class="theme-color bg-gradient-success"></span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="warning-gradient"
                    name="header-theme"
                  />
                  <span class="theme-color bg-gradient-warning"></span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="danger-gradient"
                    name="header-theme"
                  />
                  <span class="theme-color bg-gradient-danger"></span>
                </label>
              </div>
            </div>
            <div class="m-v-15 border bottom">
              <p class="text-dark text-semibold m-b-0">Side Nav Color</p>
              <p class="m-b-15">Config side nav background</p>
              <div class="theme-selector p-b-15">
                <label>
                  <input type="radio" value="default" name="side-nav-color" />
                  <span class="theme-color bg-white border"></span>
                </label>
                <label>
                  <input type="radio" value="dark" name="side-nav-color" />
                  <span class="theme-color bg-dark"></span>
                </label>
              </div>
            </div>
            <div class="m-v-15">
              <p class="text-dark text-semibold m-b-0">RTL</p>
              <p class="m-b-15">Toggle right to left</p>
              <div class="theme-selector p-b-15">
                <div class="switch checkbox-inline">
                  <input type="checkbox" name="rtl-toogle" id="rtl-toogle" />
                  <label for="rtl-toogle"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- config END -->
        <!-- chat START -->
        <div id="quick-view-chat" role="tabpanel" class="tab-pane fade">
          <div class="quick-view-chat chat">
            <div class="chat-user-list">
              <div class="m-b-30 m-t-20">
                <h6 class="p-h-20 text-uppercase text-semibold">Online</h6>
                <ul class="list-media">
                  <li class="list-item unread-msg">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-1.jpg" alt="" />
                        <span class="status success"></span>
                      </div>
                      <div class="info">
                        <span class="title">Marshall Nichols</span>
                        <span class="sub-title"
                          >Here's the story of a man...</span
                        >
                        <div class="float-item">
                          <span class="chat-counter">2</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="list-item unread-msg">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-2.jpg" alt="" />
                        <span class="status success"></span>
                      </div>
                      <div class="info">
                        <span class="title">Susie Willis</span>
                        <span class="sub-title"
                          >Do you see any Teletubbies...</span
                        >
                        <div class="float-item">
                          <span class="chat-counter">1</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="list-item">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-3.jpg" alt="" />
                        <span class="status success"></span>
                      </div>
                      <div class="info">
                        <span class="title">Debra Stewart</span>
                        <span class="sub-title"
                          >Oh my God. I didn't even...</span
                        >
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="m-b-30">
                <h6 class="p-h-20 text-uppercase text-semibold">Away</h6>
                <ul class="list-media">
                  <li class="list-item">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-4.jpg" alt="" />
                        <span class="status away"></span>
                      </div>
                      <div class="info">
                        <span class="title p-t-10">Francisco Vasquez</span>
                      </div>
                    </a>
                  </li>
                  <li class="list-item">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-5.jpg" alt="" />
                        <span class="status away"></span>
                      </div>
                      <div class="info">
                        <span class="title p-t-10">Jane Hunt</span>
                      </div>
                    </a>
                  </li>
                  <li class="list-item">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-6.jpg" alt="" />
                        <span class="status away"></span>
                      </div>
                      <div class="info">
                        <span class="title p-t-10">Ava Alexander</span>
                      </div>
                    </a>
                  </li>
                  <li class="list-item">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-7.jpg" alt="" />
                        <span class="status away"></span>
                      </div>
                      <div class="info">
                        <span class="title p-t-10">Shane Ross</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="m-b-30">
                <h6 class="p-h-20 text-uppercase text-semibold">Busy</h6>
                <ul class="list-media">
                  <li class="list-item">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-8.jpg" alt="" />
                        <span class="status busy"></span>
                      </div>
                      <div class="info">
                        <span class="title p-t-10">Erin Gonzales</span>
                      </div>
                    </a>
                  </li>
                  <li class="list-item">
                    <a
                      href="javascript:void(0);"
                      class="conversation-toggler media-hover p-h-20"
                    >
                      <div class="media-img">
                        <img src="/images/avatars/thumb-9.jpg" alt="" />
                        <span class="status busy"></span>
                      </div>
                      <div class="info">
                        <span class="title p-t-10">Alan Mills</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="quick-view-conversation conversation">
              <div class="conversation-wrapper">
                <div class="conversation-header">
                  <span class="recipient">Susie Willis</span>
                  <ul class="tools">
                    <li>
                      <a class="text-gray" href="javascript:void(0)">
                        <i class="mdi mdi-dots-vertical"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray conversation-toggler"
                        href="javascript:void(0)"
                      >
                        <i class="mdi mdi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="quick-view-conversation-body conversation-body scrollable"
                >
                  <div class="msg datetime">
                    <span>7:57PM</span>
                  </div>
                  <div class="msg msg-recipient">
                    <div class="user-img">
                      <img src="/images/avatars/thumb-2.jpg" alt="" />
                    </div>
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span>Hey, what are you doing?</span>
                      </div>
                    </div>
                  </div>
                  <div class="msg msg-sent">
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span
                          >Texting the most beautiful girl in the world.</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="msg msg-recipient">
                    <div class="user-img">
                      <img src="/images/avatars/thumb-2.jpg" alt="" />
                    </div>
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span>Oh? How Cute</span>
                      </div>
                    </div>
                  </div>
                  <div class="msg msg-sent">
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span>Yup but she's not replying so texting you</span>
                      </div>
                    </div>
                  </div>
                  <div class="msg msg-recipient">
                    <div class="user-img">
                      <img src="/images/avatars/thumb-2.jpg" alt="" />
                    </div>
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span>Okay</span>
                      </div>
                    </div>
                  </div>
                  <div class="msg datetime">
                    <span>8:05PM</span>
                  </div>
                  <div class="msg msg-recipient">
                    <div class="user-img">
                      <img src="/images/avatars/thumb-2.jpg" alt="" />
                    </div>
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span>Bye</span>
                      </div>
                    </div>
                  </div>
                  <div class="msg msg-sent">
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span>I'm just kidding..!!</span>
                      </div>
                    </div>
                  </div>
                  <div class="msg msg-sent">
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span>Hello</span>
                      </div>
                    </div>
                  </div>
                  <div class="msg msg-sent">
                    <div class="bubble">
                      <div class="bubble-wrapper">
                        <span>It's me..can you hear me..!!</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="conversation-footer">
                  <button class="upload-btn">
                    <i class="ti-face-smile"></i>
                  </button>
                  <input
                    class="chat-input"
                    type="text"
                    placeholder="Type a message..."
                  />
                  <button class="sent-btn">
                    <i class="fa fa-send-o"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- chat END -->
        <!-- activity START -->
        <div id="activity" role="tabpanel" class="tab-pane fade">
          <div class="quick-view-activity">
            <ul class="list-media m-t-20">
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <img src="/images/avatars/thumb-1.jpg" alt="" />
                  </div>
                  <div class="info">
                    <span class="title">Marshall Nichols</span>
                    <span class="sub-title">has replied your mails.</span>
                    <span class="sub-title font-size-11 p-t-5">8 min ago</span>
                  </div>
                </a>
              </li>
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <img src="/images/avatars/thumb-2.jpg" alt="" />
                  </div>
                  <div class="info">
                    <span class="title">Susie Willis</span>
                    <span class="sub-title">commented on your post's</span>
                    <span class="sub-title font-size-11 p-t-5">12 min ago</span>
                  </div>
                </a>
              </li>
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <div class="icon-avatar bg-primary">
                      <i class="ti-settings"></i>
                    </div>
                  </div>
                  <div class="info">
                    <span class="title">System Notifications</span>
                    <span class="sub-title">Your account updated</span>
                    <span class="sub-title font-size-11 p-t-5">2 days ago</span>
                  </div>
                </a>
              </li>
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <img src="/images/avatars/thumb-8.jpg" alt="" />
                  </div>
                  <div class="info">
                    <span class="title">Erin Gonzales</span>
                    <span class="sub-title">commented on your post's</span>
                    <span class="sub-title font-size-11 p-t-5">3 days ago</span>
                  </div>
                </a>
              </li>
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <div class="icon-avatar bg-info">
                      <i class="mdi mdi-file-outline"></i>
                    </div>
                  </div>
                  <div class="info">
                    <span class="title">New Attachment</span>
                    <span class="sub-title">3 files has updated</span>
                    <span class="sub-title font-size-11 p-t-5">5 days ago</span>
                  </div>
                </a>
              </li>
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <div class="icon-avatar bg-success">
                      <span>S</span>
                    </div>
                  </div>
                  <div class="info">
                    <span class="title">Suzanne Lynch</span>
                    <span class="sub-title">has sent you a message.</span>
                    <span class="sub-title font-size-11 p-t-5">9 days ago</span>
                  </div>
                </a>
              </li>
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <img src="/images/avatars/thumb-12.jpg" alt="" />
                  </div>
                  <div class="info">
                    <span class="title">Riley Newman</span>
                    <span class="sub-title">commented on your post's</span>
                    <span class="sub-title font-size-11 p-t-5"
                      >10 days ago</span
                    >
                  </div>
                </a>
              </li>
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <div class="icon-avatar bg-warning">
                      <span>FW</span>
                    </div>
                  </div>
                  <div class="info">
                    <span class="title">Franklin Weaver</span>
                    <span class="sub-title">has sent you a message.</span>
                    <span class="sub-title font-size-11 p-t-5"
                      >10 days ago</span
                    >
                  </div>
                </a>
              </li>
              <li class="list-item border bottom">
                <a href="javascript:void(0);" class="media-hover p-20">
                  <div class="media-img">
                    <img src="/images/avatars/thumb-11.jpg" alt="" />
                  </div>
                  <div class="info">
                    <span class="title">Darryl Day</span>
                    <span class="sub-title">commented on your post's</span>
                    <span class="sub-title font-size-11 p-t-5"
                      >12 days ago</span
                    >
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- activity END -->
      </div>
    </div>
    <!-- Side Panel END -->

    <!-- Content Wrapper START -->
    <div class="main-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Customer Overview</h5>
                <div class="float-right">
                  <ul class="list-inline d-none d-sm-block">
                    <li class="m-r-20">
                      <span class="status success"></span>
                      <span class="text-semibold m-l-5">Sales</span>
                    </li>
                    <li>
                      <span class="status info"></span>
                      <span class="text-semibold m-l-5">Products</span>
                    </li>
                    <li>
                      <span class="status primary"></span>
                      <span class="text-semibold m-l-5">Costs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <div class="m-t-10">
                  <canvas
                    class="chart"
                    id="customer-overview-chart"
                    style="height: 320px"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Your Sales</h4>
                <div class="card-toolbar">
                  <ul>
                    <li>
                      <a class="text-gray" href="javascript:void(0)">
                        <i class="mdi mdi-dots-vertical font-size-20"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <div class="m-t-10">
                  <span class="status gradient info"></span>
                  <span class="m-b-10 font-size-16 m-l-5">Online Sales</span>
                  <div class="float-right">
                    <b class="font-size-18 text-dark">15,872 </b>
                    <span>USD</span>
                  </div>
                  <div class="progress m-t-15">
                    <div
                      class="progress-bar bg-gradient-info"
                      role="progressbar"
                      style="width: 70%"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="m-t-60">
                  <span class="status gradient success"></span>
                  <span class="m-b-10 font-size-16 m-l-5">Offline Sales</span>
                  <div class="float-right">
                    <b class="font-size-18 text-dark">7,623 </b>
                    <span>USD</span>
                  </div>
                  <div class="progress m-t-15">
                    <div
                      class="progress-bar bg-gradient-success"
                      role="progressbar"
                      style="width: 50%"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div class="m-t-60 m-b-20">
                  <p class="font-size-16">Total Sales</p>
                  <div class="row m-t-20">
                    <div class="col">
                      <span class="font-size-23 text-dark">$23,495 </span>
                    </div>
                    <div class="col text-right">
                      <div id="sparkline-line-chart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Goals this Month</h4>
                <div class="card-toolbar">
                  <ul>
                    <li>
                      <a class="text-gray" href="javascript:void(0)">
                        <i class="mdi mdi-dots-vertical font-size-20"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <div class="m-b-30">
                  <canvas
                    class="chart"
                    id="goal-chart"
                    style="height: 200px"
                  ></canvas>
                </div>
                <div class="row m-b-10">
                  <div class="col-10 offset-1">
                    <div class="row">
                      <div class="col">
                        <div class="text-center">
                          <h2 class="font-weight-light">166</h2>
                          <span class="status gradient info"></span>
                          <span class="m-l-10">Sales</span>
                        </div>
                      </div>
                      <div class="col">
                        <div class="text-center">
                          <h2 class="font-weight-light">71</h2>
                          <span class="status gradient"></span>
                          <span class="m-l-10">In-Store Sales</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Recent Order</h4>
                <div class="card-toolbar">
                  <ul>
                    <li>
                      <a class="text-gray" href="javascript:void(0)">
                        <i class="mdi mdi-dots-vertical font-size-20"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="table-overflow">
                <table class="table table-lg">
                  <thead>
                    <tr>
                      <td class="text-dark text-semibold">Customer</td>
                      <td class="text-dark text-semibold">Order ID</td>
                      <td class="text-dark text-semibold">Order Date</td>
                      <td class="text-dark text-semibold">Amount</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="list-media">
                          <div class="list-item">
                            <div class="media-img">
                              <img
                                src="/images/avatars/thumb-1.jpg"
                                alt=""
                              />
                            </div>
                            <div class="info">
                              <span class="title p-t-10 text-semibold"
                                >Marshall Nichols</span
                              >
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>#33667</td>
                      <td>08 May 2018</td>
                      <td>$168.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="list-media">
                          <div class="list-item">
                            <div class="media-img">
                              <img
                                src="/images/avatars/thumb-2.jpg"
                                alt=""
                              />
                            </div>
                            <div class="info">
                              <span class="title p-t-10 text-semibold"
                                >Susie Willis</span
                              >
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>#33683</td>
                      <td>05 May 2018</td>
                      <td>$433.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="list-media">
                          <div class="list-item">
                            <div class="media-img">
                              <img
                                src="/images/avatars/thumb-3.jpg"
                                alt=""
                              />
                            </div>
                            <div class="info">
                              <span class="title p-t-10 text-semibold"
                                >Debra Stewart</span
                              >
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>#33668</td>
                      <td>09 May 2018</td>
                      <td>$2488.00</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="list-media">
                          <div class="list-item">
                            <div class="media-img">
                              <img
                                src="/images/avatars/thumb-8.jpg"
                                alt=""
                              />
                            </div>
                            <div class="info">
                              <span class="title p-t-10 text-semibold"
                                >Erin Gonzales</span
                              >
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>#33684</td>
                      <td>16 May 2018</td>
                      <td>$762.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Connect</h4>
                <div class="card-toolbar">
                  <ul>
                    <li>
                      <a class="text-gray" href="javascript:void(0)">
                        <i class="mdi mdi-dots-vertical font-size-20"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul class="list-media m-b-20">
                <li class="list-item">
                  <div class="p-v-15 p-h-20">
                    <div class="media-img">
                      <img src="/images/avatars/thumb-2.jpg" alt="" />
                    </div>
                    <div class="info">
                      <span class="title p-t-10 text-semibold"
                        >Susie Willis</span
                      >
                      <div class="float-item">
                        <button class="btn btn-default btn-rounded m-b-0">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="p-v-15 p-h-20">
                    <div class="media-img">
                      <img src="/images/avatars/thumb-3.jpg" alt="" />
                    </div>
                    <div class="info">
                      <span class="title p-t-10 text-semibold"
                        >Debra Stewart</span
                      >
                      <div class="float-item">
                        <button class="btn btn-default btn-rounded m-b-0">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="p-v-15 p-h-20">
                    <div class="media-img">
                      <img src="/images/avatars/thumb-8.jpg" alt="" />
                    </div>
                    <div class="info">
                      <span class="title p-t-10 text-semibold"
                        >Erin Gonzales</span
                      >
                      <div class="float-item">
                        <button class="btn btn-default btn-rounded m-b-0">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-item">
                  <div class="p-v-15 p-h-20">
                    <div class="media-img">
                      <img src="/images/avatars/thumb-6.jpg" alt="" />
                    </div>
                    <div class="info">
                      <span class="title p-t-10 text-semibold"
                        >Ava Alexander</span
                      >
                      <div class="float-item">
                        <button class="btn btn-default btn-rounded m-b-0">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">
                  <span>Your Earning</span>
                  <span class="d-block text-gray font-size-13 m-t-10"
                    >Jan 7 - Mar 8
                  </span>
                </h4>
                <div class="card-toolbar">
                  <ul>
                    <li>
                      <a class="text-gray" href="javascript:void(0)">
                        <i class="mdi mdi-dots-vertical font-size-20"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <h2 class="font-weight-light font-size-28">$1,689.73</h2>
                <p>
                  <span class="text-info text-semibold font-size-15">1.5%</span>
                  services charge per sales
                </p>
              </div>
              <div class="m-t-45">
                <canvas
                  class="chart"
                  id="earning-chart"
                  style="height: 100px"
                ></canvas>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Upcoming Event</h4>
                <div class="card-toolbar">
                  <ul>
                    <li>
                      <a class="text-gray" href="javascript:void(0)">
                        <i class="mdi mdi-dots-vertical font-size-20"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body p-t-15">
                <ul class="list-unstyled">
                  <li class="p-v-15 border bottom">
                    <a href="#">
                      <div class="media">
                        <div class="m-r-20">
                          <img
                            class="img-fluid"
                            src="/images/others/img-35.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 class="text-link text-semibold m-b-0 m-t-5">
                            Team Gathering
                          </h5>
                          <p class="text-semibold font-size-13">MAY 11, 2018</p>
                          <p class="font-size-13">
                            Efficiently unleash information
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-v-15">
                    <a href="#">
                      <div class="media">
                        <div class="m-r-20">
                          <img
                            class="img-fluid"
                            src="/images/others/img-34.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h5 class="text-link text-semibold m-b-0 m-t-5">
                            Video Conference
                          </h5>
                          <p class="text-semibold font-size-13">MAY 18, 2018</p>
                          <p class="font-size-13">
                            Efficiently unleash information
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content Wrapper END -->

    <!-- Footer START -->
    <footer class="content-footer">
      <div class="footer">
        <div class="copyright">
          <span
            >Copyright © 2018 <b class="text-dark">Theme_Nate</b>. All rights
            reserved.</span
          >
          <span class="go-right">
            <a href="#" class="text-gray m-r-15">Term &amp; Conditions</a>
            <a href="#" class="text-gray">Privacy &amp; Policy</a>
          </span>
        </div>
      </div>
    </footer>
    <!-- Footer END -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HomePage",
  setup() {
    const { t, locale, availableLocales } = useI18n({
      useScope: "global",
    });

    return { t, locale, availableLocales };
  },
});
</script>
