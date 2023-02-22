import card_travel from "../../assets/icons/card_travel_black_24dp.svg";
import support_agent from "../../assets/icons/support_agent_black_24dp.svg";
import approval_delegation from "../../assets/icons/approval_delegation_FILL0_wght400_GRAD0_opsz48.svg";
import groups from "../../assets/icons/groups_black_24dp.svg";
import room_preferences from "../../assets/icons/room_preferences_black_24dp.svg";
import lab_profile from "../../assets/icons/lab_profile_FILL0_wght400_GRAD0_opsz48.svg";
import domain from "../../assets/icons/domain_black_24dp.svg";
import content_paste_search from "../../assets/icons/content_paste_search_black_24dp.svg";
import local_mall from "../../assets/icons/local_mall_black_24dp.svg";
import monetization_on from "../../assets/icons/monetization_on_black_24dp.svg";
import assignment from "../../assets/icons/assignment_black_24dp.svg";
// import info from "../../assets/icons/info_black_24dp.svg";
// import settings from "../../assets/icons/settings_black_24dp.svg";

export const SIDEBAR = [
  {
    icon: card_travel,
    path: "/",
    list: [
      {
        title: "Tạo đặt phòng mới",
        path: "/new-booking",
      },
      {
        title: "Tìm kiếm đặt phòng",
        path: "/search-room",
      },
      {
        title: "Trang thái đặt phòng",
        path: "/",
      },
      {
        title: "Nhật ký",
        path: "/",
      },
      {
        title: "Tình trạng phòng trống",
        path: "/",
      },
      {
        title: "Hồ sơ công ty, đại lý du lịch",
        path: "/",
      },
      {
        title: "Hồ sơ khách",
        path: "/",
      },
      {
        title: "Hợp đồng Allotment",
        path: "/",
      },
      {
        title: "Đặt phòng từ CMS/EZCRS",
        path: "/",
      },
      {
        title: "Danh sách nhiệm vụ",
        path: "/",
      },
    ],
  },
  {
    icon: support_agent,
    path: "recep",
    list: [
      {
        title: "Test reception",
        path: "/",
      },
      {
        title: "Test reception",
        path: "/",
      },
      {
        title: "Test reception",
        path: "/",
      },
    ],
  },
  {
    icon: approval_delegation,
    path: "pay",
  },
  {
    icon: groups,
    path: "1",
  },
  {
    icon: room_preferences,
    path: "2",
  },
  {
    icon: lab_profile,
    path: "3",
  },
  {
    icon: domain,
    path: "4",
  },
  {
    icon: content_paste_search,
    path: "5",
  },
  {
    icon: local_mall,
    path: "6",
  },
  {
    icon: monetization_on,
    path: "7",
  },
  {
    icon: assignment,
    path: "8",
  },
];
