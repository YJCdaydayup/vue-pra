//
//  HKViewManager.m
//  ATEST
//
//  Created by 杨力 on 2019/2/24.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "HKViewOne.h"

@interface HKViewOne()<RCTBridgeModule>

@property (copy, nonatomic) NSString *title;

@end

@implementation HKViewOne

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(changeTitle:(NSString *)title){
  self.title = title;
}

// 返回要显示的View
- (UIView *)view {
  UIView *v = [[UIView alloc]init];
  v.backgroundColor = [UIColor redColor];
  v.frame = [UIScreen mainScreen].bounds;
  UILabel *label = [[UILabel alloc]init];
  label.frame = CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height);
  label.backgroundColor = [UIColor redColor];
  [v addSubview:label];
  
  UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(showAlert)];
  label.userInteractionEnabled = YES;
  [label addGestureRecognizer:tap];
  
  return v;
}

- (void)showAlert {
  UIAlertView *alert = [[UIAlertView alloc]initWithTitle:self.title message:self.title delegate:nil cancelButtonTitle:@"确定" otherButtonTitles:nil, nil];
  [alert show];
}
@end
