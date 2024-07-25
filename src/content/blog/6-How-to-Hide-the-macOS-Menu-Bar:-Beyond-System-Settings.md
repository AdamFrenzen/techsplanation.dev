---
title: "How to Hide the macOS Menu Bar: Beyond System Settings"
description: "Hide the macOS Menu Bar, not through the system settings app."
pubDate: "Jul 24 2024"
heroImage: "/blog-placeholder-4.jpg"
---

![The menu bar, which is the bar on the top of the screen with the time and other features.](/images/6/menu-bar.png)

The only customization setting that macOS natively offers for the menu bar is to "Automatically show or hide the menu bar". This post shares an idea that might be preferred over just the native settings.


![Menu bar settings, can be found in control center - automatically hide and show the menu bar at the bottom.](/images/6/hide-menu-bar-settings.png)

**Never** results in having the menu bar on screen at all times. So all of the app menu text, menu bar app icons, and the clock will clutter your screen and cause you to lose screen space.

**Always** causes the menu bar to toggle when your mouse hovers at the top of the screen. The auto hide often causes you to unintentionally toggle the menu bar whenever interacting with thing's at the top of the screen.

Neither of these options are great. Personally, if I had to choose one I would choose to always show the menu bar, because I find the auto setting gets in my way. But I still don't like the clutter the menu bar adds. 

<div style="display: flex;">
    <img 
    src="/images/6/rectangle-margin.gif" 
    alt="Rectangle margin showcase gif" 
    style="margin: auto; width: 100%"
    />
</div>

My solution essentially combines these two settings. I have the setting set to auto show/hide, but my app windows have a margin from the top of the screen so that I do not accidentally trigger the auto show/hide. And even if it does trigger, it does not block the apps.

## Hiding the Menu Bar Using Rectangle:

Rectangle is a popular, completely free, window management app for macOS. The app allows you to easily snap windows into common locations and sizes. MacOS Sequoia (currently unreleased) will finally add this feature to the native macOS experience, however I will still be using rectangle for the added customizability.

<div style="display: flex;">
    <img 
    src="/images/6/rectangle-app-icon.png" 
    alt="Rectangle app icon" 
    style="margin: auto; width: 25%"
    />
</div>

Enter the following command in the terminal app to set Rectangle to include a margin at the top when snapping. Setting the top gap at 24 was the perfect amount for the gap to be the exact size of the menu bar for me, but you can change that number to whatever size works. 

You must restart the Rectangle app for the changes to take effect after running the command.

```
defaults write com.knollsoft.Rectangle screenEdgeGapTop -int 24
```

If you need to revert this change, just set the gap to 0.

```
defaults write com.knollsoft.Rectangle screenEdgeGapTop -int 0
```

You can get information about the screen gap setting, and additional Rectangle settings from their [documentation](https://github.com/rxhanson/Rectangle/blob/main/TerminalCommands.md#setting-gaps-at-the-screen-edges).

This isn't an absolutely perfect solution because you still lose screen space and have to trigger Rectangle snapping. However, out of the options I prefer to auto hide the menu bar and include a bit of margin to not accidentally trigger it.

**Extra Idea:** you could utilize the top margin space to display a custom menu bar using [Sketchybar](https://github.com/FelixKratz/SketchyBar) or display a custom widget on the desktop with [Ubersicht](https://tracesof.net/uebersicht/).

### Read Next:

[How to Completely Hide the macOS Dock: Beyond System Settings](https://techsplanation.dev/blog/5-how-to-completely-hide-the-macos-dock-beyond-system-settings/)