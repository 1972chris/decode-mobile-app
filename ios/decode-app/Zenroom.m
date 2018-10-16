//
//  Zenroom.m
//  decode-app
//
//  Created by Jordi Coscolla on 16/10/2018.
//  Copyright © 2018 650 Industries, Inc. All rights reserved.
//

#import "Zenroom.h"
#import <React/RCTLog.h>
#import "zenroomInternal.h"

@implementation Zenroom

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(execute:(NSString *)contract data:(NSString *)data key:(NSString*)key withResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
      RCTLogInfo(@"Zenroom.execute receiving parameters %@ %@ %@", contract, data, key);
    contract = @"print(\"hello\")";
    
    char *c = [contract UTF8String];
    char *d = [data UTF8String];
    char *k = [key UTF8String];
    
    size_t outputSize = 1024 * 8;
    char *z_output = (char*)malloc(outputSize * sizeof(char));
    size_t errorSize = 1024 * 8;
    char *z_error = (char*)malloc(errorSize * sizeof(char));
    
    //zenroom_exec_tobuf(c,"", k, d, 3, z_output, outputSize, z_error, errorSize);
    zenroom_exec(c,"", k, d, 3);
    
    NSLog(@"output: %s", z_output);
    NSLog(@"error: %s", z_error);
    
    
    resolve([NSString stringWithUTF8String:stdout]);
    
}

// RCT_EXPORT_MODULE(Zenroom);

@end
