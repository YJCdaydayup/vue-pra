/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import <CodePush/CodePush.h>
#import "UMMobClick/MobClick.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <UMSocialCore/UMSocialCore.h>
#import "Constants.h"
#import "SplashScreen.h"
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [self initUmeng];
  
  NSURL *jsCodeLocation;

  
//#ifdef DEBUG
jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//#else
//    jsCodeLocation = [CodePush bundleURL];
//#endif

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"imooc_gp"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
//  [SplashScreen show];
  return YES;
}
-(void)initUmeng{
  //UMeng 统计
  UMConfigInstance.appKey =UM_AppKey;
  UMConfigInstance.channelId = UM_ChannelId;
  [MobClick startWithConfigure:UMConfigInstance];//配置以上参数后调用此方法初始化SDK！
  
  //UMeng分享
  //打开调试日志
  [[UMSocialManager defaultManager] openLog:YES];
  
  //设置友盟appkey
  [[UMSocialManager defaultManager] setUmSocialAppkey:UM_AppKey];
  
  //设置微信的appKey和appSecret
  [[UMSocialManager defaultManager] setPlaform:UMSocialPlatformType_WechatSession appKey:AppKey_WX appSecret:AppSecret_WX redirectURL:@"http://mobile.umeng.com/social"];
  
  
  //设置分享到QQ互联的appKey和appSecret
  [[UMSocialManager defaultManager] setPlaform:UMSocialPlatformType_QQ appKey:AppKey_QQ  appSecret:AppSecret_QQ redirectURL:@"http://mobile.umeng.com/social"];
  
  //设置新浪的appKey和appSecret
  [[UMSocialManager defaultManager] setPlaform:UMSocialPlatformType_Sina appKey:AppKey_WB  appSecret:AppSecret_WB redirectURL:@"http://sns.whalecloud.com/sina2/callback"];
}
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  BOOL result = [[UMSocialManager defaultManager] handleOpenURL:url];
  if (!result) {
    // 其他如支付等SDK的回调
  }
  return result;
}
@end
