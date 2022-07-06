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
        <div class="page-header">
          <h2 class="header-title">Data Table</h2>
          <div class="header-sub-title">
            <nav class="breadcrumb breadcrumb-dash">
              <a href="#" class="breadcrumb-item"
                ><i class="ti-home p-r-5"></i>Home</a
              >
              <a class="breadcrumb-item" href="#">Tables</a>
              <span class="breadcrumb-item active">Data Table</span>
            </nav>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="table-overflow">
              <table id="dt-opt" class="table table-hover table-xl">
                <thead>
                  <tr>
                    <th>
                      <div class="checkbox p-0">
                        <input
                          id="selectable1"
                          type="checkbox"
                          class="checkAll"
                          name="checkAll"
                        />
                        <label for="selectable1"></label>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Bill Code</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="index">
                    <td>
                      <div class="checkbox">
                        <input id="selectable2" type="checkbox" />
                        <label for="selectable2"></label>
                      </div>
                    </td>
                    <td>
                      <div class="list-media">
                        <div class="list-item">
                          <div class="media-img">
                            <img src="/images/avatars/thumb-1.jpg" alt="" />
                          </div>
                          <div class="info">
                            <span class="title">Marshall Nichols</span>
                            <span class="sub-title">ID 870</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-pill badge-gradient-success">
                        Actived
                      </span>
                    </td>
                    <td>#33667</td>
                    <td>08 May 2018</td>
                    <td>$168.00</td>
                    <td class="text-center font-size-18">
                      <a href="#" class="text-gray m-r-15"
                        ><i class="ti-pencil"></i
                      ></a>
                      <a href="#" class="text-gray"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
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

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { User } from "./types";

export default defineComponent({
  name: "HomePage",
  setup() {
    const { t, locale, availableLocales } = useI18n({
      useScope: "global",
    });

    const users = ref<User[]>([
      {
        id: 1,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-1.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 2,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-2.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 3,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-3.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 4,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-4.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 5,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-5.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 6,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-5.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 7,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-5.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 8,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-5.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 9,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-5.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 10,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-5.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 11,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-5.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
      {
        id: 12,
        name: "asdasdsad",
        avatar: "/images/avatars/thumb-5.jpg",
        status: 1,
        billCode: 33684,
        date: "18 May 2018",
        amount: 168.0,
      },
    ]);

    return { t, locale, availableLocales, users };
  },
});
</script>

<style lang="scss" scoped>
  .table-scroll {
  position: relative;
  width:100%;
  z-index: 1;
  margin: auto;
  overflow: auto;
  height: 350px;
}
.table-scroll table {
  width: 100%;
  min-width: 1280px;
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
}
.table-wrap {
  position: relative;
}
.table-scroll th,
.table-scroll td {
  padding: 5px 10px;
  border: 1px solid #f8f8f8;
  background: #fff;
  vertical-align: top;
}
.table-scroll thead th {
  background: lightseagreen;
  color: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
/* safari and ios need the tfoot itself to be position:sticky also */
.table-scroll tfoot,
.table-scroll tfoot th,
.table-scroll tfoot td {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  background: midnightblue;
  color: #fff;
  z-index:4;
}
</style>