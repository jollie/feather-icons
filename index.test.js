import React from 'react';
import renderer from 'react-test-renderer'
import {
  IconActivity,
  IconAirplay,
  IconAlertCircle,
  IconAlertOctagon,
  IconAlertTriangle,
  IconAlignCenter,
  IconAlignJustify,
  IconAlignLeft,
  IconAlignRight,
  IconAnchor,
  IconAperture,
  IconArchive,
  IconArrowDownCircle,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowDown,
  IconArrowLeftCircle,
  IconArrowLeft,
  IconArrowRightCircle,
  IconArrowRight,
  IconArrowUpCircle,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconArrowUp,
  IconAtSign,
  IconAward,
  IconBarChart2,
  IconBarChart,
  IconBatteryCharging,
  IconBattery,
  IconBellOff,
  IconBell,
  IconBluetooth,
  IconBold,
  IconBookOpen,
  IconBook,
  IconBookmark,
  IconBox,
  IconBriefcase,
  IconCalendar,
  IconCameraOff,
  IconCamera,
  IconCast,
  IconCheckCircle,
  IconCheckSquare,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronsDown,
  IconChevronsLeft,
  IconChevronsRight,
  IconChevronsUp,
  IconChrome,
  IconCircle,
  IconClipboard,
  IconClock,
  IconCloudDrizzle,
  IconCloudLightning,
  IconCloudOff,
  IconCloudRain,
  IconCloudSnow,
  IconCloud,
  IconCode,
  IconCodepen,
  IconCodesandbox,
  IconCoffee,
  IconColumns,
  IconCommand,
  IconCompass,
  IconCopy,
  IconCornerDownLeft,
  IconCornerDownRight,
  IconCornerLeftDown,
  IconCornerLeftUp,
  IconCornerRightDown,
  IconCornerRightUp,
  IconCornerUpLeft,
  IconCornerUpRight,
  IconCpu,
  IconCreditCard,
  IconCrop,
  IconCrosshair,
  IconDatabase,
  IconDelete,
  IconDisc,
  IconDivideCircle,
  IconDivideSquare,
  IconDivide,
  IconDollarSign,
  IconDownloadCloud,
  IconDownload,
  IconDribbble,
  IconDroplet,
  IconEdit2,
  IconEdit3,
  IconEdit,
  IconExternalLink,
  IconEyeOff,
  IconEye,
  IconFacebook,
  IconFastForward,
  IconFeather,
  IconFigma,
  IconFileMinus,
  IconFilePlus,
  IconFileText,
  IconFile,
  IconFilm,
  IconFilter,
  IconFlag,
  IconFolderMinus,
  IconFolderPlus,
  IconFolder,
  IconFramer,
  IconFrown,
  IconGift,
  IconGitBranch,
  IconGitCommit,
  IconGitMerge,
  IconGitPullRequest,
  IconGithub,
  IconGitlab,
  IconGlobe,
  IconGrid,
  IconHardDrive,
  IconHash,
  IconHeadphones,
  IconHeart,
  IconHelpCircle,
  IconHexagon,
  IconHome,
  IconImage,
  IconInbox,
  IconInfo,
  IconInstagram,
  IconItalic,
  IconKey,
  IconLayers,
  IconLayout,
  IconLifeBuoy,
  IconLink2,
  IconLink,
  IconLinkedin,
  IconList,
  IconLoader,
  IconLock,
  IconLogIn,
  IconLogOut,
  IconMail,
  IconMapPin,
  IconMap,
  IconMaximize2,
  IconMaximize,
  IconMeh,
  IconMenu,
  IconMessageCircle,
  IconMessageSquare,
  IconMicOff,
  IconMic,
  IconMinimize2,
  IconMinimize,
  IconMinusCircle,
  IconMinusSquare,
  IconMinus,
  IconMonitor,
  IconMoon,
  IconMoreHorizontal,
  IconMoreVertical,
  IconMousePointer,
  IconMove,
  IconMusic,
  IconNavigation2,
  IconNavigation,
  IconOctagon,
  IconPackage,
  IconPaperclip,
  IconPauseCircle,
  IconPause,
  IconPenTool,
  IconPercent,
  IconPhoneCall,
  IconPhoneForwarded,
  IconPhoneIncoming,
  IconPhoneMissed,
  IconPhoneOff,
  IconPhoneOutgoing,
  IconPhone,
  IconPieChart,
  IconPlayCircle,
  IconPlay,
  IconPlusCircle,
  IconPlusSquare,
  IconPlus,
  IconPocket,
  IconPower,
  IconPrinter,
  IconRadio,
  IconRefreshCcw,
  IconRefreshCw,
  IconRepeat,
  IconRewind,
  IconRotateCcw,
  IconRotateCw,
  IconRss,
  IconSave,
  IconScissors,
  IconSearch,
  IconSend,
  IconServer,
  IconSettings,
  IconShare2,
  IconShare,
  IconShieldOff,
  IconShield,
  IconShoppingBag,
  IconShoppingCart,
  IconShuffle,
  IconSidebar,
  IconSkipBack,
  IconSkipForward,
  IconSlack,
  IconSlash,
  IconSliders,
  IconSmartphone,
  IconSmile,
  IconSpeaker,
  IconSquare,
  IconStar,
  IconStopCircle,
  IconSun,
  IconSunrise,
  IconSunset,
  IconTablet,
  IconTag,
  IconTarget,
  IconTerminal,
  IconThermometer,
  IconThumbsDown,
  IconThumbsUp,
  IconToggleLeft,
  IconToggleRight,
  IconTool,
  IconTrash2,
  IconTrash,
  IconTrello,
  IconTrendingDown,
  IconTrendingUp,
  IconTriangle,
  IconTruck,
  IconTv,
  IconTwitch,
  IconTwitter,
  IconType,
  IconUmbrella,
  IconUnderline,
  IconUnlock,
  IconUploadCloud,
  IconUpload,
  IconUserCheck,
  IconUserMinus,
  IconUserPlus,
  IconUserX,
  IconUser,
  IconUsers,
  IconVideoOff,
  IconVideo,
  IconVoicemail,
  IconVolume1,
  IconVolume2,
  IconVolumeX,
  IconVolume,
  IconWatch,
  IconWifiOff,
  IconWifi,
  IconWind,
  IconXCircle,
  IconXOctagon,
  IconXSquare,
  IconX,
  IconYoutube,
  IconZapOff,
  IconZap,
  IconZoomIn,
  IconZoomOut,
} from './src';

test('Rendering IconActivity', () => {
  const component = renderer.create(<IconActivity />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAirplay', () => {
  const component = renderer.create(<IconAirplay />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAlertCircle', () => {
  const component = renderer.create(<IconAlertCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAlertOctagon', () => {
  const component = renderer.create(<IconAlertOctagon />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAlertTriangle', () => {
  const component = renderer.create(<IconAlertTriangle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAlignCenter', () => {
  const component = renderer.create(<IconAlignCenter />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAlignJustify', () => {
  const component = renderer.create(<IconAlignJustify />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAlignLeft', () => {
  const component = renderer.create(<IconAlignLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAlignRight', () => {
  const component = renderer.create(<IconAlignRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAnchor', () => {
  const component = renderer.create(<IconAnchor />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAperture', () => {
  const component = renderer.create(<IconAperture />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArchive', () => {
  const component = renderer.create(<IconArchive />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowDownCircle', () => {
  const component = renderer.create(<IconArrowDownCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowDownLeft', () => {
  const component = renderer.create(<IconArrowDownLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowDownRight', () => {
  const component = renderer.create(<IconArrowDownRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowDown', () => {
  const component = renderer.create(<IconArrowDown />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowLeftCircle', () => {
  const component = renderer.create(<IconArrowLeftCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowLeft', () => {
  const component = renderer.create(<IconArrowLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowRightCircle', () => {
  const component = renderer.create(<IconArrowRightCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowRight', () => {
  const component = renderer.create(<IconArrowRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowUpCircle', () => {
  const component = renderer.create(<IconArrowUpCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowUpLeft', () => {
  const component = renderer.create(<IconArrowUpLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowUpRight', () => {
  const component = renderer.create(<IconArrowUpRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconArrowUp', () => {
  const component = renderer.create(<IconArrowUp />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAtSign', () => {
  const component = renderer.create(<IconAtSign />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconAward', () => {
  const component = renderer.create(<IconAward />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBarChart2', () => {
  const component = renderer.create(<IconBarChart2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBarChart', () => {
  const component = renderer.create(<IconBarChart />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBatteryCharging', () => {
  const component = renderer.create(<IconBatteryCharging />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBattery', () => {
  const component = renderer.create(<IconBattery />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBellOff', () => {
  const component = renderer.create(<IconBellOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBell', () => {
  const component = renderer.create(<IconBell />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBluetooth', () => {
  const component = renderer.create(<IconBluetooth />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBold', () => {
  const component = renderer.create(<IconBold />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBookOpen', () => {
  const component = renderer.create(<IconBookOpen />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBook', () => {
  const component = renderer.create(<IconBook />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBookmark', () => {
  const component = renderer.create(<IconBookmark />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBox', () => {
  const component = renderer.create(<IconBox />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconBriefcase', () => {
  const component = renderer.create(<IconBriefcase />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCalendar', () => {
  const component = renderer.create(<IconCalendar />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCameraOff', () => {
  const component = renderer.create(<IconCameraOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCamera', () => {
  const component = renderer.create(<IconCamera />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCast', () => {
  const component = renderer.create(<IconCast />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCheckCircle', () => {
  const component = renderer.create(<IconCheckCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCheckSquare', () => {
  const component = renderer.create(<IconCheckSquare />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCheck', () => {
  const component = renderer.create(<IconCheck />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChevronDown', () => {
  const component = renderer.create(<IconChevronDown />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChevronLeft', () => {
  const component = renderer.create(<IconChevronLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChevronRight', () => {
  const component = renderer.create(<IconChevronRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChevronUp', () => {
  const component = renderer.create(<IconChevronUp />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChevronsDown', () => {
  const component = renderer.create(<IconChevronsDown />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChevronsLeft', () => {
  const component = renderer.create(<IconChevronsLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChevronsRight', () => {
  const component = renderer.create(<IconChevronsRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChevronsUp', () => {
  const component = renderer.create(<IconChevronsUp />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconChrome', () => {
  const component = renderer.create(<IconChrome />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCircle', () => {
  const component = renderer.create(<IconCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconClipboard', () => {
  const component = renderer.create(<IconClipboard />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconClock', () => {
  const component = renderer.create(<IconClock />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCloudDrizzle', () => {
  const component = renderer.create(<IconCloudDrizzle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCloudLightning', () => {
  const component = renderer.create(<IconCloudLightning />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCloudOff', () => {
  const component = renderer.create(<IconCloudOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCloudRain', () => {
  const component = renderer.create(<IconCloudRain />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCloudSnow', () => {
  const component = renderer.create(<IconCloudSnow />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCloud', () => {
  const component = renderer.create(<IconCloud />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCode', () => {
  const component = renderer.create(<IconCode />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCodepen', () => {
  const component = renderer.create(<IconCodepen />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCodesandbox', () => {
  const component = renderer.create(<IconCodesandbox />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCoffee', () => {
  const component = renderer.create(<IconCoffee />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconColumns', () => {
  const component = renderer.create(<IconColumns />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCommand', () => {
  const component = renderer.create(<IconCommand />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCompass', () => {
  const component = renderer.create(<IconCompass />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCopy', () => {
  const component = renderer.create(<IconCopy />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCornerDownLeft', () => {
  const component = renderer.create(<IconCornerDownLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCornerDownRight', () => {
  const component = renderer.create(<IconCornerDownRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCornerLeftDown', () => {
  const component = renderer.create(<IconCornerLeftDown />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCornerLeftUp', () => {
  const component = renderer.create(<IconCornerLeftUp />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCornerRightDown', () => {
  const component = renderer.create(<IconCornerRightDown />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCornerRightUp', () => {
  const component = renderer.create(<IconCornerRightUp />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCornerUpLeft', () => {
  const component = renderer.create(<IconCornerUpLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCornerUpRight', () => {
  const component = renderer.create(<IconCornerUpRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCpu', () => {
  const component = renderer.create(<IconCpu />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCreditCard', () => {
  const component = renderer.create(<IconCreditCard />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCrop', () => {
  const component = renderer.create(<IconCrop />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconCrosshair', () => {
  const component = renderer.create(<IconCrosshair />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDatabase', () => {
  const component = renderer.create(<IconDatabase />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDelete', () => {
  const component = renderer.create(<IconDelete />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDisc', () => {
  const component = renderer.create(<IconDisc />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDivideCircle', () => {
  const component = renderer.create(<IconDivideCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDivideSquare', () => {
  const component = renderer.create(<IconDivideSquare />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDivide', () => {
  const component = renderer.create(<IconDivide />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDollarSign', () => {
  const component = renderer.create(<IconDollarSign />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDownloadCloud', () => {
  const component = renderer.create(<IconDownloadCloud />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDownload', () => {
  const component = renderer.create(<IconDownload />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDribbble', () => {
  const component = renderer.create(<IconDribbble />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconDroplet', () => {
  const component = renderer.create(<IconDroplet />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconEdit2', () => {
  const component = renderer.create(<IconEdit2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconEdit3', () => {
  const component = renderer.create(<IconEdit3 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconEdit', () => {
  const component = renderer.create(<IconEdit />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconExternalLink', () => {
  const component = renderer.create(<IconExternalLink />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconEyeOff', () => {
  const component = renderer.create(<IconEyeOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconEye', () => {
  const component = renderer.create(<IconEye />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFacebook', () => {
  const component = renderer.create(<IconFacebook />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFastForward', () => {
  const component = renderer.create(<IconFastForward />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFeather', () => {
  const component = renderer.create(<IconFeather />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFigma', () => {
  const component = renderer.create(<IconFigma />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFileMinus', () => {
  const component = renderer.create(<IconFileMinus />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFilePlus', () => {
  const component = renderer.create(<IconFilePlus />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFileText', () => {
  const component = renderer.create(<IconFileText />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFile', () => {
  const component = renderer.create(<IconFile />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFilm', () => {
  const component = renderer.create(<IconFilm />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFilter', () => {
  const component = renderer.create(<IconFilter />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFlag', () => {
  const component = renderer.create(<IconFlag />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFolderMinus', () => {
  const component = renderer.create(<IconFolderMinus />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFolderPlus', () => {
  const component = renderer.create(<IconFolderPlus />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFolder', () => {
  const component = renderer.create(<IconFolder />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFramer', () => {
  const component = renderer.create(<IconFramer />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconFrown', () => {
  const component = renderer.create(<IconFrown />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGift', () => {
  const component = renderer.create(<IconGift />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGitBranch', () => {
  const component = renderer.create(<IconGitBranch />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGitCommit', () => {
  const component = renderer.create(<IconGitCommit />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGitMerge', () => {
  const component = renderer.create(<IconGitMerge />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGitPullRequest', () => {
  const component = renderer.create(<IconGitPullRequest />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGithub', () => {
  const component = renderer.create(<IconGithub />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGitlab', () => {
  const component = renderer.create(<IconGitlab />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGlobe', () => {
  const component = renderer.create(<IconGlobe />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconGrid', () => {
  const component = renderer.create(<IconGrid />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconHardDrive', () => {
  const component = renderer.create(<IconHardDrive />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconHash', () => {
  const component = renderer.create(<IconHash />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconHeadphones', () => {
  const component = renderer.create(<IconHeadphones />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconHeart', () => {
  const component = renderer.create(<IconHeart />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconHelpCircle', () => {
  const component = renderer.create(<IconHelpCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconHexagon', () => {
  const component = renderer.create(<IconHexagon />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconHome', () => {
  const component = renderer.create(<IconHome />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconImage', () => {
  const component = renderer.create(<IconImage />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconInbox', () => {
  const component = renderer.create(<IconInbox />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconInfo', () => {
  const component = renderer.create(<IconInfo />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconInstagram', () => {
  const component = renderer.create(<IconInstagram />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconItalic', () => {
  const component = renderer.create(<IconItalic />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconKey', () => {
  const component = renderer.create(<IconKey />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLayers', () => {
  const component = renderer.create(<IconLayers />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLayout', () => {
  const component = renderer.create(<IconLayout />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLifeBuoy', () => {
  const component = renderer.create(<IconLifeBuoy />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLink2', () => {
  const component = renderer.create(<IconLink2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLink', () => {
  const component = renderer.create(<IconLink />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLinkedin', () => {
  const component = renderer.create(<IconLinkedin />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconList', () => {
  const component = renderer.create(<IconList />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLoader', () => {
  const component = renderer.create(<IconLoader />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLock', () => {
  const component = renderer.create(<IconLock />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLogIn', () => {
  const component = renderer.create(<IconLogIn />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconLogOut', () => {
  const component = renderer.create(<IconLogOut />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMail', () => {
  const component = renderer.create(<IconMail />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMapPin', () => {
  const component = renderer.create(<IconMapPin />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMap', () => {
  const component = renderer.create(<IconMap />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMaximize2', () => {
  const component = renderer.create(<IconMaximize2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMaximize', () => {
  const component = renderer.create(<IconMaximize />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMeh', () => {
  const component = renderer.create(<IconMeh />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMenu', () => {
  const component = renderer.create(<IconMenu />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMessageCircle', () => {
  const component = renderer.create(<IconMessageCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMessageSquare', () => {
  const component = renderer.create(<IconMessageSquare />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMicOff', () => {
  const component = renderer.create(<IconMicOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMic', () => {
  const component = renderer.create(<IconMic />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMinimize2', () => {
  const component = renderer.create(<IconMinimize2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMinimize', () => {
  const component = renderer.create(<IconMinimize />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMinusCircle', () => {
  const component = renderer.create(<IconMinusCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMinusSquare', () => {
  const component = renderer.create(<IconMinusSquare />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMinus', () => {
  const component = renderer.create(<IconMinus />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMonitor', () => {
  const component = renderer.create(<IconMonitor />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMoon', () => {
  const component = renderer.create(<IconMoon />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMoreHorizontal', () => {
  const component = renderer.create(<IconMoreHorizontal />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMoreVertical', () => {
  const component = renderer.create(<IconMoreVertical />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMousePointer', () => {
  const component = renderer.create(<IconMousePointer />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMove', () => {
  const component = renderer.create(<IconMove />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconMusic', () => {
  const component = renderer.create(<IconMusic />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconNavigation2', () => {
  const component = renderer.create(<IconNavigation2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconNavigation', () => {
  const component = renderer.create(<IconNavigation />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconOctagon', () => {
  const component = renderer.create(<IconOctagon />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPackage', () => {
  const component = renderer.create(<IconPackage />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPaperclip', () => {
  const component = renderer.create(<IconPaperclip />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPauseCircle', () => {
  const component = renderer.create(<IconPauseCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPause', () => {
  const component = renderer.create(<IconPause />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPenTool', () => {
  const component = renderer.create(<IconPenTool />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPercent', () => {
  const component = renderer.create(<IconPercent />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPhoneCall', () => {
  const component = renderer.create(<IconPhoneCall />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPhoneForwarded', () => {
  const component = renderer.create(<IconPhoneForwarded />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPhoneIncoming', () => {
  const component = renderer.create(<IconPhoneIncoming />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPhoneMissed', () => {
  const component = renderer.create(<IconPhoneMissed />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPhoneOff', () => {
  const component = renderer.create(<IconPhoneOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPhoneOutgoing', () => {
  const component = renderer.create(<IconPhoneOutgoing />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPhone', () => {
  const component = renderer.create(<IconPhone />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPieChart', () => {
  const component = renderer.create(<IconPieChart />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPlayCircle', () => {
  const component = renderer.create(<IconPlayCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPlay', () => {
  const component = renderer.create(<IconPlay />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPlusCircle', () => {
  const component = renderer.create(<IconPlusCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPlusSquare', () => {
  const component = renderer.create(<IconPlusSquare />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPlus', () => {
  const component = renderer.create(<IconPlus />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPocket', () => {
  const component = renderer.create(<IconPocket />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPower', () => {
  const component = renderer.create(<IconPower />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconPrinter', () => {
  const component = renderer.create(<IconPrinter />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconRadio', () => {
  const component = renderer.create(<IconRadio />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconRefreshCcw', () => {
  const component = renderer.create(<IconRefreshCcw />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconRefreshCw', () => {
  const component = renderer.create(<IconRefreshCw />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconRepeat', () => {
  const component = renderer.create(<IconRepeat />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconRewind', () => {
  const component = renderer.create(<IconRewind />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconRotateCcw', () => {
  const component = renderer.create(<IconRotateCcw />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconRotateCw', () => {
  const component = renderer.create(<IconRotateCw />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconRss', () => {
  const component = renderer.create(<IconRss />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSave', () => {
  const component = renderer.create(<IconSave />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconScissors', () => {
  const component = renderer.create(<IconScissors />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSearch', () => {
  const component = renderer.create(<IconSearch />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSend', () => {
  const component = renderer.create(<IconSend />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconServer', () => {
  const component = renderer.create(<IconServer />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSettings', () => {
  const component = renderer.create(<IconSettings />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconShare2', () => {
  const component = renderer.create(<IconShare2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconShare', () => {
  const component = renderer.create(<IconShare />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconShieldOff', () => {
  const component = renderer.create(<IconShieldOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconShield', () => {
  const component = renderer.create(<IconShield />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconShoppingBag', () => {
  const component = renderer.create(<IconShoppingBag />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconShoppingCart', () => {
  const component = renderer.create(<IconShoppingCart />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconShuffle', () => {
  const component = renderer.create(<IconShuffle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSidebar', () => {
  const component = renderer.create(<IconSidebar />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSkipBack', () => {
  const component = renderer.create(<IconSkipBack />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSkipForward', () => {
  const component = renderer.create(<IconSkipForward />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSlack', () => {
  const component = renderer.create(<IconSlack />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSlash', () => {
  const component = renderer.create(<IconSlash />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSliders', () => {
  const component = renderer.create(<IconSliders />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSmartphone', () => {
  const component = renderer.create(<IconSmartphone />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSmile', () => {
  const component = renderer.create(<IconSmile />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSpeaker', () => {
  const component = renderer.create(<IconSpeaker />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSquare', () => {
  const component = renderer.create(<IconSquare />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconStar', () => {
  const component = renderer.create(<IconStar />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconStopCircle', () => {
  const component = renderer.create(<IconStopCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSun', () => {
  const component = renderer.create(<IconSun />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSunrise', () => {
  const component = renderer.create(<IconSunrise />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconSunset', () => {
  const component = renderer.create(<IconSunset />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTablet', () => {
  const component = renderer.create(<IconTablet />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTag', () => {
  const component = renderer.create(<IconTag />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTarget', () => {
  const component = renderer.create(<IconTarget />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTerminal', () => {
  const component = renderer.create(<IconTerminal />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconThermometer', () => {
  const component = renderer.create(<IconThermometer />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconThumbsDown', () => {
  const component = renderer.create(<IconThumbsDown />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconThumbsUp', () => {
  const component = renderer.create(<IconThumbsUp />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconToggleLeft', () => {
  const component = renderer.create(<IconToggleLeft />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconToggleRight', () => {
  const component = renderer.create(<IconToggleRight />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTool', () => {
  const component = renderer.create(<IconTool />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTrash2', () => {
  const component = renderer.create(<IconTrash2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTrash', () => {
  const component = renderer.create(<IconTrash />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTrello', () => {
  const component = renderer.create(<IconTrello />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTrendingDown', () => {
  const component = renderer.create(<IconTrendingDown />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTrendingUp', () => {
  const component = renderer.create(<IconTrendingUp />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTriangle', () => {
  const component = renderer.create(<IconTriangle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTruck', () => {
  const component = renderer.create(<IconTruck />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTv', () => {
  const component = renderer.create(<IconTv />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTwitch', () => {
  const component = renderer.create(<IconTwitch />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconTwitter', () => {
  const component = renderer.create(<IconTwitter />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconType', () => {
  const component = renderer.create(<IconType />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUmbrella', () => {
  const component = renderer.create(<IconUmbrella />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUnderline', () => {
  const component = renderer.create(<IconUnderline />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUnlock', () => {
  const component = renderer.create(<IconUnlock />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUploadCloud', () => {
  const component = renderer.create(<IconUploadCloud />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUpload', () => {
  const component = renderer.create(<IconUpload />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUserCheck', () => {
  const component = renderer.create(<IconUserCheck />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUserMinus', () => {
  const component = renderer.create(<IconUserMinus />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUserPlus', () => {
  const component = renderer.create(<IconUserPlus />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUserX', () => {
  const component = renderer.create(<IconUserX />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUser', () => {
  const component = renderer.create(<IconUser />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconUsers', () => {
  const component = renderer.create(<IconUsers />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconVideoOff', () => {
  const component = renderer.create(<IconVideoOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconVideo', () => {
  const component = renderer.create(<IconVideo />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconVoicemail', () => {
  const component = renderer.create(<IconVoicemail />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconVolume1', () => {
  const component = renderer.create(<IconVolume1 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconVolume2', () => {
  const component = renderer.create(<IconVolume2 />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconVolumeX', () => {
  const component = renderer.create(<IconVolumeX />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconVolume', () => {
  const component = renderer.create(<IconVolume />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconWatch', () => {
  const component = renderer.create(<IconWatch />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconWifiOff', () => {
  const component = renderer.create(<IconWifiOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconWifi', () => {
  const component = renderer.create(<IconWifi />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconWind', () => {
  const component = renderer.create(<IconWind />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconXCircle', () => {
  const component = renderer.create(<IconXCircle />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconXOctagon', () => {
  const component = renderer.create(<IconXOctagon />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconXSquare', () => {
  const component = renderer.create(<IconXSquare />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconX', () => {
  const component = renderer.create(<IconX />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconYoutube', () => {
  const component = renderer.create(<IconYoutube />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconZapOff', () => {
  const component = renderer.create(<IconZapOff />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconZap', () => {
  const component = renderer.create(<IconZap />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconZoomIn', () => {
  const component = renderer.create(<IconZoomIn />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('Rendering IconZoomOut', () => {
  const component = renderer.create(<IconZoomOut />);
  expect(component.toJSON()).toMatchSnapshot();
});

