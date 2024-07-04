#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

#import <YandexMapsMobile/YMKMapKitFactory.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"taxi_app_markup_and_styles_only";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  [YMKMapKit setApiKey:@"bf0e3592-f90f-481c-9211-793b71bddf7c"];
  [YMKMapKit setLocale:@"en_US"];
  [YMKMapKit mapKit];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
