import React from 'react';
import renderer from 'react-test-renderer'
import IconActivity from './src/activity';
import IconAirplay from './src/airplay';
import IconAlertCircle from './src/alert-circle';
import IconAlertOctagon from './src/alert-octagon';
import IconAlertTriangle from './src/alert-triangle';
import IconAlignCenter from './src/align-center';
import IconAlignJustify from './src/align-justify';
import IconAlignLeft from './src/align-left';
import IconAlignRight from './src/align-right';
import IconAnchor from './src/anchor';
import IconAperture from './src/aperture';
import IconArchive from './src/archive';
import IconArrowDownCircle from './src/arrow-down-circle';
import IconArrowDownLeft from './src/arrow-down-left';
import IconArrowDownRight from './src/arrow-down-right';
import IconArrowDown from './src/arrow-down';
import IconArrowLeftCircle from './src/arrow-left-circle';
import IconArrowLeft from './src/arrow-left';
import IconArrowRightCircle from './src/arrow-right-circle';
import IconArrowRight from './src/arrow-right';
import IconArrowUpCircle from './src/arrow-up-circle';
import IconArrowUpLeft from './src/arrow-up-left';
import IconArrowUpRight from './src/arrow-up-right';
import IconArrowUp from './src/arrow-up';
import IconAtSign from './src/at-sign';
import IconAward from './src/award';
import IconBarChart2 from './src/bar-chart-2';
import IconBarChart from './src/bar-chart';
import IconBatteryCharging from './src/battery-charging';
import IconBattery from './src/battery';
import IconBellOff from './src/bell-off';
import IconBell from './src/bell';
import IconBluetooth from './src/bluetooth';
import IconBold from './src/bold';
import IconBookOpen from './src/book-open';
import IconBook from './src/book';
import IconBookmark from './src/bookmark';
import IconBox from './src/box';
import IconBriefcase from './src/briefcase';
import IconCalendar from './src/calendar';
import IconCameraOff from './src/camera-off';
import IconCamera from './src/camera';
import IconCast from './src/cast';
import IconCheckCircle from './src/check-circle';
import IconCheckSquare from './src/check-square';
import IconCheck from './src/check';
import IconChevronDown from './src/chevron-down';
import IconChevronLeft from './src/chevron-left';
import IconChevronRight from './src/chevron-right';
import IconChevronUp from './src/chevron-up';
import IconChevronsDown from './src/chevrons-down';
import IconChevronsLeft from './src/chevrons-left';
import IconChevronsRight from './src/chevrons-right';
import IconChevronsUp from './src/chevrons-up';
import IconChrome from './src/chrome';
import IconCircle from './src/circle';
import IconClipboard from './src/clipboard';
import IconClock from './src/clock';
import IconCloudDrizzle from './src/cloud-drizzle';
import IconCloudLightning from './src/cloud-lightning';
import IconCloudOff from './src/cloud-off';
import IconCloudRain from './src/cloud-rain';
import IconCloudSnow from './src/cloud-snow';
import IconCloud from './src/cloud';
import IconCode from './src/code';
import IconCodepen from './src/codepen';
import IconCodesandbox from './src/codesandbox';
import IconCoffee from './src/coffee';
import IconColumns from './src/columns';
import IconCommand from './src/command';
import IconCompass from './src/compass';
import IconCopy from './src/copy';
import IconCornerDownLeft from './src/corner-down-left';
import IconCornerDownRight from './src/corner-down-right';
import IconCornerLeftDown from './src/corner-left-down';
import IconCornerLeftUp from './src/corner-left-up';
import IconCornerRightDown from './src/corner-right-down';
import IconCornerRightUp from './src/corner-right-up';
import IconCornerUpLeft from './src/corner-up-left';
import IconCornerUpRight from './src/corner-up-right';
import IconCpu from './src/cpu';
import IconCreditCard from './src/credit-card';
import IconCrop from './src/crop';
import IconCrosshair from './src/crosshair';
import IconDatabase from './src/database';
import IconDelete from './src/delete';
import IconDisc from './src/disc';
import IconDivideCircle from './src/divide-circle';
import IconDivideSquare from './src/divide-square';
import IconDivide from './src/divide';
import IconDollarSign from './src/dollar-sign';
import IconDownloadCloud from './src/download-cloud';
import IconDownload from './src/download';
import IconDribbble from './src/dribbble';
import IconDroplet from './src/droplet';
import IconEdit2 from './src/edit-2';
import IconEdit3 from './src/edit-3';
import IconEdit from './src/edit';
import IconExternalLink from './src/external-link';
import IconEyeOff from './src/eye-off';
import IconEye from './src/eye';
import IconFacebook from './src/facebook';
import IconFastForward from './src/fast-forward';
import IconFeather from './src/feather';
import IconFigma from './src/figma';
import IconFileMinus from './src/file-minus';
import IconFilePlus from './src/file-plus';
import IconFileText from './src/file-text';
import IconFile from './src/file';
import IconFilm from './src/film';
import IconFilter from './src/filter';
import IconFlag from './src/flag';
import IconFolderMinus from './src/folder-minus';
import IconFolderPlus from './src/folder-plus';
import IconFolder from './src/folder';
import IconFramer from './src/framer';
import IconFrown from './src/frown';
import IconGift from './src/gift';
import IconGitBranch from './src/git-branch';
import IconGitCommit from './src/git-commit';
import IconGitMerge from './src/git-merge';
import IconGitPullRequest from './src/git-pull-request';
import IconGithub from './src/github';
import IconGitlab from './src/gitlab';
import IconGlobe from './src/globe';
import IconGrid from './src/grid';
import IconHardDrive from './src/hard-drive';
import IconHash from './src/hash';
import IconHeadphones from './src/headphones';
import IconHeart from './src/heart';
import IconHelpCircle from './src/help-circle';
import IconHexagon from './src/hexagon';
import IconHome from './src/home';
import IconImage from './src/image';
import IconInbox from './src/inbox';
import IconInfo from './src/info';
import IconInstagram from './src/instagram';
import IconItalic from './src/italic';
import IconKey from './src/key';
import IconLayers from './src/layers';
import IconLayout from './src/layout';
import IconLifeBuoy from './src/life-buoy';
import IconLink2 from './src/link-2';
import IconLink from './src/link';
import IconLinkedin from './src/linkedin';
import IconList from './src/list';
import IconLoader from './src/loader';
import IconLock from './src/lock';
import IconLogIn from './src/log-in';
import IconLogOut from './src/log-out';
import IconMail from './src/mail';
import IconMapPin from './src/map-pin';
import IconMap from './src/map';
import IconMaximize2 from './src/maximize-2';
import IconMaximize from './src/maximize';
import IconMeh from './src/meh';
import IconMenu from './src/menu';
import IconMessageCircle from './src/message-circle';
import IconMessageSquare from './src/message-square';
import IconMicOff from './src/mic-off';
import IconMic from './src/mic';
import IconMinimize2 from './src/minimize-2';
import IconMinimize from './src/minimize';
import IconMinusCircle from './src/minus-circle';
import IconMinusSquare from './src/minus-square';
import IconMinus from './src/minus';
import IconMonitor from './src/monitor';
import IconMoon from './src/moon';
import IconMoreHorizontal from './src/more-horizontal';
import IconMoreVertical from './src/more-vertical';
import IconMousePointer from './src/mouse-pointer';
import IconMove from './src/move';
import IconMusic from './src/music';
import IconNavigation2 from './src/navigation-2';
import IconNavigation from './src/navigation';
import IconOctagon from './src/octagon';
import IconPackage from './src/package';
import IconPaperclip from './src/paperclip';
import IconPauseCircle from './src/pause-circle';
import IconPause from './src/pause';
import IconPenTool from './src/pen-tool';
import IconPercent from './src/percent';
import IconPhoneCall from './src/phone-call';
import IconPhoneForwarded from './src/phone-forwarded';
import IconPhoneIncoming from './src/phone-incoming';
import IconPhoneMissed from './src/phone-missed';
import IconPhoneOff from './src/phone-off';
import IconPhoneOutgoing from './src/phone-outgoing';
import IconPhone from './src/phone';
import IconPieChart from './src/pie-chart';
import IconPlayCircle from './src/play-circle';
import IconPlay from './src/play';
import IconPlusCircle from './src/plus-circle';
import IconPlusSquare from './src/plus-square';
import IconPlus from './src/plus';
import IconPocket from './src/pocket';
import IconPower from './src/power';
import IconPrinter from './src/printer';
import IconRadio from './src/radio';
import IconRefreshCcw from './src/refresh-ccw';
import IconRefreshCw from './src/refresh-cw';
import IconRepeat from './src/repeat';
import IconRewind from './src/rewind';
import IconRotateCcw from './src/rotate-ccw';
import IconRotateCw from './src/rotate-cw';
import IconRss from './src/rss';
import IconSave from './src/save';
import IconScissors from './src/scissors';
import IconSearch from './src/search';
import IconSend from './src/send';
import IconServer from './src/server';
import IconSettings from './src/settings';
import IconShare2 from './src/share-2';
import IconShare from './src/share';
import IconShieldOff from './src/shield-off';
import IconShield from './src/shield';
import IconShoppingBag from './src/shopping-bag';
import IconShoppingCart from './src/shopping-cart';
import IconShuffle from './src/shuffle';
import IconSidebar from './src/sidebar';
import IconSkipBack from './src/skip-back';
import IconSkipForward from './src/skip-forward';
import IconSlack from './src/slack';
import IconSlash from './src/slash';
import IconSliders from './src/sliders';
import IconSmartphone from './src/smartphone';
import IconSmile from './src/smile';
import IconSpeaker from './src/speaker';
import IconSquare from './src/square';
import IconStar from './src/star';
import IconStopCircle from './src/stop-circle';
import IconSun from './src/sun';
import IconSunrise from './src/sunrise';
import IconSunset from './src/sunset';
import IconTablet from './src/tablet';
import IconTag from './src/tag';
import IconTarget from './src/target';
import IconTerminal from './src/terminal';
import IconThermometer from './src/thermometer';
import IconThumbsDown from './src/thumbs-down';
import IconThumbsUp from './src/thumbs-up';
import IconToggleLeft from './src/toggle-left';
import IconToggleRight from './src/toggle-right';
import IconTool from './src/tool';
import IconTrash2 from './src/trash-2';
import IconTrash from './src/trash';
import IconTrello from './src/trello';
import IconTrendingDown from './src/trending-down';
import IconTrendingUp from './src/trending-up';
import IconTriangle from './src/triangle';
import IconTruck from './src/truck';
import IconTv from './src/tv';
import IconTwitch from './src/twitch';
import IconTwitter from './src/twitter';
import IconType from './src/type';
import IconUmbrella from './src/umbrella';
import IconUnderline from './src/underline';
import IconUnlock from './src/unlock';
import IconUploadCloud from './src/upload-cloud';
import IconUpload from './src/upload';
import IconUserCheck from './src/user-check';
import IconUserMinus from './src/user-minus';
import IconUserPlus from './src/user-plus';
import IconUserX from './src/user-x';
import IconUser from './src/user';
import IconUsers from './src/users';
import IconVideoOff from './src/video-off';
import IconVideo from './src/video';
import IconVoicemail from './src/voicemail';
import IconVolume1 from './src/volume-1';
import IconVolume2 from './src/volume-2';
import IconVolumeX from './src/volume-x';
import IconVolume from './src/volume';
import IconWatch from './src/watch';
import IconWifiOff from './src/wifi-off';
import IconWifi from './src/wifi';
import IconWind from './src/wind';
import IconXCircle from './src/x-circle';
import IconXOctagon from './src/x-octagon';
import IconXSquare from './src/x-square';
import IconX from './src/x';
import IconYoutube from './src/youtube';
import IconZapOff from './src/zap-off';
import IconZap from './src/zap';
import IconZoomIn from './src/zoom-in';
import IconZoomOut from './src/zoom-out';

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

