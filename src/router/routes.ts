// page
const p = (path: string) => {
  return () => import(`@/pages/${path}.vue`).then((m) => m.default || m);
};

// page layout
const pl = (path: string) => {
  return () => import(`@/layouts/${path}.vue`).then((m) => m.default || m);
};

export default [
  {
    path: "/",
    name: "Home",
    components: {
      default: p("HomePage/HomePage"),
      header: pl("HeaderComponent/HeaderComponent"),
      navbar: pl("NavBarComponent/NavBarComponent"),
    },
    // redirect: { name: "Login" },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      default: p("LoginPage/LoginPage"),
      header: pl("NoneComponent/NoneComponent"),
      navbar: pl("NoneComponent/NoneComponent"),
    },
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/user",
    name: "User",
    components: {
      default: p("User/UserList/UserList"),
      header: pl("HeaderComponent/HeaderComponent"),
      navbar: pl("NavBarComponent/NavBarComponent"),
    },
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "", component: p("User/UserList/UserList")
      }
    ]
  },
  // {
  //   path: '/test-interview/:token',
  //   name: 'TestInterview',
  //   component: page('TestInterview'),
  //   meta: {
  //     requiresVisitor: true
  //   }
  // },
  // {
  //   path: '/start-test/:token',
  //   name: 'StartTest',
  //   component: page('StartTest'),
  //   meta: {
  //     requiresVisitor: true
  //   }
  // },
  // {
  //   path: '/iq-question',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'question.iq.index',
  //       component: page('Question/IQ')
  //     },
  //     {
  //       path: 'create',
  //       name: 'question.iq.create',
  //       component: page('Question/IQ/IQForm')
  //     },
  //     {
  //       path: 'edit/:id',
  //       name: 'question.iq.edit',
  //       component: page('Question/IQ/IQForm'),
  //       props: true
  //     },
  //     {
  //       path: ':id',
  //       name: 'question.iq.show',
  //       component: page('Question/IQ/IQDetail'),
  //       props: true
  //     },
  //     {
  //       path: 'test',
  //       name: 'question.iq.exams',
  //       component: page('Question/IQ/Exams')
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/algorithm-question',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'question.algorithm.index',
  //       component: page('Question/Algorithm')
  //     },
  //     {
  //       path: 'create',
  //       name: 'question.algorithm.create',
  //       component: page('Question/Algorithm/AlgorithmForm')
  //     },
  //     {
  //       path: 'edit/:id',
  //       name: 'question.algorithm.edit',
  //       component: page('Question/Algorithm/AlgorithmForm'),
  //       props: true
  //     },
  //     {
  //       path: 'detail/:id',
  //       name: 'question.algorithm.detail',
  //       component: page('Question/Algorithm/AlgorithmDetail'),
  //       props: true
  //     },
  //     {
  //       path: 'generate-exam',
  //       name: 'question.algorithm.generate',
  //       component: page('Question/Algorithm/GenerateExam')
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/candidates',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'candidates.index',
  //       component: page('Candidate/Index')
  //     },
  //     {
  //       path: 'create',
  //       name: 'candidates.create',
  //       component: page('Candidate/CandidateForm')
  //     },
  //     {
  //       path: ':id',
  //       name: 'candidates.show',
  //       component: page('Candidate/CandidateDetail'),
  //       props: true
  //     },
  //     {
  //       path: ':id/edit',
  //       name: 'candidates.edit',
  //       component: page('Candidate/CandidateForm'),
  //       props: true
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/requests',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'requests.index',
  //       component: page('Request/Index')
  //     },
  //     {
  //       path: 'create',
  //       name: 'requests.create',
  //       component: page('Request/RequestForm')
  //     },
  //     {
  //       path: 'show/:id',
  //       name: 'requests.show',
  //       component: page('Request/RequestDetail'),
  //       props: true
  //     },
  //     {
  //       path: 'edit/:id',
  //       name: 'requests.edit',
  //       component: page('Request/RequestForm'),
  //       props: true
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/position',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'position.index',
  //       component: page('Position/Index')
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true,
  //     requiresPermission: true
  //   }
  // },
  // {
  //   path: '/skill',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'skill.index',
  //       component: page('Skill/Index')
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true,
  //     requiresPermission: true
  //   }
  // },
  // {
  //   path: '/user',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: 'show/:id',
  //       name: 'user.show',
  //       component: page('User/UserForm'),
  //       props: true
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/testFormat',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: '',
  //       name: 'testFormat.index',
  //       component: page('TestFormat/Index')
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/resultTest',
  //   component: {
  //     render(c) {
  //       return c('router-view');
  //     }
  //   },
  //   children: [
  //     {
  //       path: 'index/:idResult',
  //       name: 'resultTest.index',
  //       component: page('ResultTest/Index'),
  //       props: true
  //     }
  //   ],
  //   meta: {
  //     requiresAuth: true
  //   }
  // }
];
