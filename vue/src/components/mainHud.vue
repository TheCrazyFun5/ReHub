<script>
import Logo from "@/components/ui/logo.vue";
import themesButton from "@/components/ui/themesButton.vue";
import blueButton from "@/components/ui/blueButton.vue";

export default {
  data() {
    return {
      showProfileMenu: false,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      currentTime: new Date(),
=======
      currentDate: null,
>>>>>>> 3c38805 (MainHud(Done))
    };
  },

  computed: {
    localDate() {
      return new Date(this.currentDate).toLocaleDateString();
    },

    localTime() {
      return new Date(this.currentDate).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    },
  },

  created() {
    this.intervalId = setInterval(() => {
      this.currentDate = Date.now();
    }, 1000);
  },
<<<<<<< HEAD
=======
    };
  },

>>>>>>> 21c41d1 (MainHud(50%))
=======
      currentTime: new Date(),
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
>>>>>>> 0859732 (news(95%))
=======

>>>>>>> 3c38805 (MainHud(Done))
  components: {
    Logo,
    themesButton,
    blueButton,
  },
};
</script>

<template>
  <main class="main">
    <aside class="leftMenu">
      <div class="header">
        <Logo />
        <themesButton />
      </div>
      <nav class="nav">
        <RouterLink to="/" class="nav_button">
          <span class="nav_button_icon">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_38_278)">
                <path
                  d="M2 17.3059C2 13.8732 2 12.1569 2.7788 10.7341C3.5576 9.31132 4.98042 8.42826 7.82604 6.66219L10.826 4.8003C13.8341 2.93343 15.3381 2 17 2C18.6619 2 20.1659 2.93343 23.174 4.8003L26.174 6.66218C29.0196 8.42826 30.4424 9.31132 31.2212 10.7341C32 12.1569 32 13.8732 32 17.3059V19.5875C32 25.4387 32 28.3644 30.2426 30.1821C28.4853 32 25.6568 32 20 32H14C8.34314 32 5.51473 32 3.75736 30.1821C2 28.3644 2 25.4387 2 19.5875V17.3059Z"
                  stroke="#448FFF"
                  stroke-width="3"
                />
                <path d="M21.5 26H12.5" stroke="#448FFF" stroke-width="3" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_38_278">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span class="nav_button_text">Главная</span>
        </RouterLink>
        <RouterLink to="/shift" class="nav_button">
          <span class="nav_button_icon">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_38_56)">
                <path
                  d="M20.3333 23.6667H26.6667C28.5335 23.6667 29.467 23.6667 30.18 23.3033C30.8072 22.9838 31.3172 22.4738 31.6367 21.8467C32 21.1337 32 20.2002 32 18.3333V7.33333C32 5.4665 32 4.53307 31.6367 3.82003C31.3172 3.19282 30.8072 2.68288 30.18 2.36332C29.467 2 28.5335 2 26.6667 2H12.3333C10.4665 2 9.53307 2 8.82003 2.36332C8.19282 2.68288 7.68288 3.19282 7.36332 3.82003C7.0223 4.48932 7.00137 5.35275 7.00008 7M27 7L18.6667 15.3333L13.6667 10.3333M27 7V12M27 7H22M12 17C12 18.841 10.5076 20.3333 8.66667 20.3333C6.82572 20.3333 5.33333 18.841 5.33333 17C5.33333 15.159 6.82572 13.6667 8.66667 13.6667C10.5076 13.6667 12 15.159 12 17ZM8.66667 25.3333C10.2166 25.3333 10.9916 25.3333 11.6274 25.5037C13.3529 25.966 14.7007 27.3138 15.163 29.0392C15.3333 29.675 15.3333 30.45 15.3333 32H2C2 30.45 2 29.675 2.17037 29.0392C2.6327 27.3138 3.98045 25.966 5.7059 25.5037C6.34173 25.3333 7.11672 25.3333 8.66667 25.3333Z"
                  stroke="#1C1C1C"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_38_56">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span class="nav_button_text">Мои смены</span>
        </RouterLink>
        <RouterLink to="/chats" class="nav_button">
          <span class="nav_button_icon">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_38_61)">
                <path
                  d="M24.5001 4.00676C22.2938 2.73049 19.7322 2.00003 17.0001 2.00003C8.71585 2.00003 2.00012 8.71576 2.00012 17C2.00012 19.3996 2.56355 21.6674 3.56531 23.6788C3.83153 24.2132 3.92014 24.8242 3.7658 25.4009L2.87239 28.7401C2.48455 30.1895 3.81064 31.5155 5.26015 31.1278L8.59921 30.2344C9.17602 30.08 9.78694 30.1687 10.3214 30.4348C12.3327 31.4366 14.6006 32 17.0001 32C25.2843 32 32.0001 25.2842 32.0001 17C32.0001 14.2679 31.2696 11.7063 29.9934 9.50003"
                  stroke="#1C1C1C"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M10.0001 17H10.0151M16.6501 17H16.6651M23.3151 17H23.3301"
                  stroke="#1C1C1C"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_38_61">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span class="nav_button_text">Сообщения</span>
        </RouterLink>
        <button class="nav_button">
          <span class="nav_button_icon">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_38_68)">
                <path
                  d="M14.1876 12.3126C14.1876 10.7593 15.4469 9.50006 17.0001 9.50006C18.5534 9.50006 19.8126 10.7593 19.8126 12.3126C19.8126 13.3437 19.2576 14.2453 18.4302 14.7349C17.7171 15.1567 17.0001 15.7966 17.0001 16.6251V18.5001"
                  stroke="#1C1C1C"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M17 24.4999C17.8284 24.4999 18.5 23.8284 18.5 22.9999C18.5 22.1715 17.8284 21.4999 17 21.4999C16.1716 21.4999 15.5 22.1715 15.5 22.9999C15.5 23.8284 16.1716 24.4999 17 24.4999Z"
                  stroke="#1C1C1C"
                />
                <path
                  d="M9.5 4.00673C11.7063 2.73046 14.2679 2 17 2C25.2842 2 32 8.71572 32 17C32 25.2842 25.2842 32 17 32C8.71572 32 2 25.2842 2 17C2 14.2679 2.73046 11.7063 4.00673 9.5"
                  stroke="#1C1C1C"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_38_68">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span class="nav_button_text">IT-Отдел</span>
        </button>
      </nav>
      <div class="profile">
        <Transition name="slide-menu">
          <div v-if="showProfileMenu" class="profile_menu">
            <button class="profile_menu_button profile_menu_button_exit">
              <span class="profile_menu_button_icon">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_42_322)">
                    <path
                      d="M12 5.75H10.3333C6.40497 5.75 4.44078 5.75 3.22038 6.84835C2 7.94671 2 9.71447 2 13.25V14M12 28.25H10.3333C6.40497 28.25 4.44078 28.25 3.22038 27.1517C2 26.0533 2 24.2855 2 20.75V20"
                      stroke="#1C1C1C"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19.7625 2.52103C16.159 1.95538 14.3574 1.67256 13.1786 2.61304C11.9999 3.55353 11.9999 5.27388 11.9999 8.7146V25.2854C11.9999 28.7261 11.9999 30.4465 13.1786 31.387C14.3574 32.3275 16.159 32.0446 19.7625 31.4789L23.6439 30.8698C27.6347 30.2432 29.63 29.93 30.815 28.6126C31.9999 27.2953 31.9999 25.39 31.9999 21.5794V12.4207C31.9999 8.61008 31.9999 6.70478 30.815 5.38739C30.0232 4.50699 28.8694 4.07507 26.9999 3.69842"
                      stroke="#1C1C1C"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path d="M17 15.5V18.5" stroke="#1C1C1C" stroke-width="3" stroke-linecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_322">
                      <rect width="34" height="34" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span class="profile_menu_button_label">Выйти</span>
            </button>
            <button class="profile_menu_button profile_menu_button_inProfile">
              <span class="profile_menu_button_icon">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_42_332)">
                    <path
                      d="M17.1794 18.1699C17.0744 18.1549 16.9394 18.1549 16.8194 18.1699C14.1794 18.0799 12.0793 15.9199 12.0793 13.2649C12.0793 10.5499 14.2694 8.34491 16.9994 8.34491C19.7144 8.34491 21.9194 10.5499 21.9194 13.2649C21.9044 15.9199 19.8194 18.0799 17.1794 18.1699Z"
                      stroke="#1C1C1C"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.1101 28.0701C24.4401 30.5151 20.9001 32.0001 17.0001 32.0001C13.1001 32.0001 9.56014 30.5151 6.89014 28.0701C7.04014 26.6601 7.94014 25.2801 9.54514 24.2001C13.6551 21.4701 20.3751 21.4701 24.4551 24.2001C26.0601 25.2801 26.9601 26.6601 27.1101 28.0701Z"
                      stroke="#1C1C1C"
                      stroke-width="  3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 32C25.2842 32 32 25.2842 32 17C32 8.71572 25.2842 2 17 2C8.71572 2 2 8.71572 2 17C2 25.2842 8.71572 32 17 32Z"
                      stroke="#1C1C1C"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_332">
                      <rect width="34" height="34" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span class="profile_menu_button_label">Мой профиль</span>
            </button>
          </div>
        </Transition>
        <button class="profile_button" @click="showProfileMenu = !showProfileMenu">
          <img src="./../assets/img/avatar.jpg" alt="Avatar" class="profile_avatar" />
          <span class="profile_userName">Анна Волокова</span>
        </button>
      </div>
    </aside>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0859732 (news(95%))
    <div class="right_block">
      <div class="header_info">
        <div class="header_info_currentDate">{{ localDate }}</div>
        <div class="header_info_currentTime">{{ localTime }}</div>
        <div class="header_info_shiftControl">
          <div class="header_info_shiftTime">
            <span class="header_info_icon">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_65_196)">
                  <path
                    d="M17 8.66667V17L12.8333 14.5M32 17C32 25.2843 25.2843 32 17 32C8.71573 32 2 25.2843 2 17C2 8.71573 8.71573 2 17 2C25.2843 2 32 8.71573 32 17Z"
                    stroke="#1C1C1C"
                    stroke-opacity="0.8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_65_196">
                    <rect width="34" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span class="header_info_timer">0ч.0м.0с.</span>
          </div>
          <blueButton>Начать смену</blueButton>
        </div>
      </div>
      <RouterView class="content" />
    </div>
<<<<<<< HEAD
=======
    <section class="mainContent">
      <h2>up</h2>
      <RouterView />
    </section>
>>>>>>> 21c41d1 (MainHud(50%))
=======
>>>>>>> 0859732 (news(95%))
  </main>
</template>

<style scoped>
svg *[stroke] {
  stroke: var(--MainColorText);
  transition: all 0.2s ease-in;
}

.main {
  display: grid;
  grid-template-columns: 18.7% 1fr;
  column-gap: 40px;
}

.leftMenu {
  display: grid;
  grid-template-rows: max-content 1fr max-content;

  height: 100vh;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0859732 (news(95%))
  /* max-width: 18.7vw; */
  max-width: 360px;
  width: 100%;
  min-width: 252.844px;
<<<<<<< HEAD
=======
  width: 18.7vw;
>>>>>>> 21c41d1 (MainHud(50%))
=======
>>>>>>> 0859732 (news(95%))
=======
>>>>>>> f7404f8 (MainHud On Grids)
  padding: 40px 30px;

  box-shadow: 0px 0px 11.7px var(--MainShadowColor);

  .header {
    display: flex;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 15px;

    margin-top: 40px;

    .nav_button {
      display: flex;
      gap: 15px;
      align-items: center;

      padding: 6px 6px;
      border-radius: 10px;

      text-decoration: none;
      transition: all 0.2s ease-in;

      .nav_button_text {
        transition: all 0.2s ease-in;
        color: var(--MainColorText);
        font-size: 28px;
      }
    }

    .nav_button:hover {
<<<<<<< HEAD
<<<<<<< HEAD
      background-color: var(--NavButtonBackgroungColor);
=======
      background-color: var(--BlueBackgroundLink);
>>>>>>> 21c41d1 (MainHud(50%))
=======
      background-color: var(--NavButtonBackgroungColor);
>>>>>>> f379102 (Small Refactoring Colors Variables)

      .nav_button_icon svg *[stroke] {
        stroke: var(--BlueColorText);
      }

      .nav_button_text {
        color: var(--BlueColorText);
      }
    }

    .router-link-active {
<<<<<<< HEAD
<<<<<<< HEAD
      background-color: var(--NavButtonBackgroungColor);
=======
      background-color: var(--BlueBackgroundLink);
>>>>>>> 21c41d1 (MainHud(50%))
=======
      background-color: var(--NavButtonBackgroungColor);
>>>>>>> f379102 (Small Refactoring Colors Variables)

      .nav_button_icon svg *[stroke] {
        stroke: var(--BlueColorText);
      }

      .nav_button_text {
        color: var(--BlueColorText);
      }
    }
  }
}

.profile {
  margin-top: auto;

  .profile_menu {
    /* display: none; */
    margin-bottom: 20px;

    box-shadow: 0px 0px 6.5px var(--GrayShadowColor);
    border-radius: 10px;

    .profile_menu_button {
      display: flex;
      align-items: center;
      gap: 15px;

      width: 100%;
      padding: 15px;

      transition: all 0.2s ease-in;

      .profile_menu_button_label {
        font-size: 20px;
        color: var(--MainColorText);

        transition: all 0.2s ease-in;
      }
    }

    .profile_menu_button:hover {
<<<<<<< HEAD
<<<<<<< HEAD
      background-color: var(--NavButtonBackgroungColor);
=======
      background-color: var(--BlueBackgroundLink);
>>>>>>> 21c41d1 (MainHud(50%))
=======
      background-color: var(--NavButtonBackgroungColor);
>>>>>>> f379102 (Small Refactoring Colors Variables)

      .profile_menu_button_icon svg *[stroke] {
        stroke: var(--BlueColorText);
      }

      .profile_menu_button_label {
        color: var(--BlueColorText);
      }
    }

    .profile_menu_button_exit {
      border-radius: 10px 10px 0 0;
      border-bottom: 1px solid var(--GrayShadowColor);
    }

    .profile_menu_button_inProfile {
      border-radius: 0 0 10px 10px;
    }
  }

  .profile_button {
    display: flex;
    align-items: center;
    gap: 10px;

    width: 100%;
    padding: 13px;

    border-radius: 10px;
    box-shadow: 0px 0px 6.5px var(--GrayShadowColor);

    transition: all 0.2s ease-in;

    .profile_avatar {
      height: 55px;
      width: 55px;

<<<<<<< HEAD
<<<<<<< HEAD
      border: 1px solid var(--AvatarBorderColor);
=======
      border: 1px solid var(--GrayColor);
>>>>>>> 21c41d1 (MainHud(50%))
=======
      border: 1px solid var(--AvatarBorderColor);
>>>>>>> f379102 (Small Refactoring Colors Variables)
      border-radius: 50%;
      box-shadow: 0px 4px 4px var(--MainShadowColor);
    }

    .profile_userName {
      font-size: 20px;
      color: var(--MainColorText);

      transition: all 0.2s ease-in;
    }
  }

  .profile_button:hover {
<<<<<<< HEAD
<<<<<<< HEAD
    background-color: var(--NavButtonBackgroungColor);
=======
    background-color: var(--BlueBackgroundLink);
>>>>>>> 21c41d1 (MainHud(50%))
=======
    background-color: var(--NavButtonBackgroungColor);
>>>>>>> f379102 (Small Refactoring Colors Variables)

    .profile_userName {
      color: var(--BlueColorText);
    }
  }
}

/* Анимация меню профиля */
.slide-menu-enter-active {
  transition: all 0.3s ease-out;
}

.slide-menu-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-menu-enter-from,
.slide-menu-leave-to {
  transform: translateY(20px);
  opacity: 0;
<<<<<<< HEAD
}

.right_block {
  width: 100%;
  margin-right: 40px;
  .header_info {
    margin-top: 38px;
  }
}

.Content {
  margin-top: 40px;
  overflow: auto;
<<<<<<< HEAD
  /* height: 87vh; */
=======
>>>>>>> 21c41d1 (MainHud(50%))
}
/* Конец анимаций */

.right_block {
  display: grid;
  grid-template-rows: 10% 1fr;

  max-height: 100vh;
  padding-right: 40px;

  .header_info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 40px;

    .header_info_currentDate {
      font-size: 24px;
      font-weight: 600;
      color: var(--MainColorText);

      opacity: 80%;
    }

    .header_info_currentTime {
      font-size: 36px;
      font-weight: 600;
      color: var(--MainColorText);

      opacity: 80%;
    }

    .header_info_shiftControl {
      display: flex;
      gap: 20px;

      .header_info_shiftTime {
        display: flex;
        align-items: center;
        gap: 15px;

        .header_info_timer {
          font-size: 20px;
          color: var(--MainColorText);

          opacity: 80%;
        }
      }
    }
  }
}

.content {
  margin-top: 40px;
<<<<<<< HEAD
  /* overflow: auto; */
  /* height: 792px; */
=======
  height: 87vh;
>>>>>>> 54baa87 (news(99%))
}

h2 {
  font-size: 30px;
  color: yellow;
  border: 1px solid yellow;
  width: 100%;
=======
  padding-bottom: 40px;
  /* width: 100%; */
  overflow: auto;
>>>>>>> f7404f8 (MainHud On Grids)
}
</style>
