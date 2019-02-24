//
//  HKViewManager.m
//  ATEST
//
//  Created by 杨力 on 2019/2/24.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "HKViewManager.h"

@implementation HKViewManager

RCT_EXPORT_MODULE()

// 返回要显示的View
- (UIView *)view {
  UIView *v = [[UIView alloc]init];
  v.backgroundColor = [UIColor redColor];
  v.frame = [UIScreen mainScreen].bounds;
  UILabel *label = [[UILabel alloc]init];
  label.frame = CGRectMake(0, 0, [UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height);
  label.backgroundColor = [UIColor redColor];
  [v addSubview:label];
  return v;
}

@end
