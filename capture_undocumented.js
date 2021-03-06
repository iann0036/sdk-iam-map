// a fuzzer for undocumented params

const AWS = require('aws-sdk');
const fetch = require('node-fetch');

var credentials = new AWS.SharedIniFileCredentials({profile: 'nothing'});
AWS.config.credentials = credentials;
AWS.config.region = 'us-east-1';

var long_undocumented_test_list = `
AutoScaling.GetPredictiveScalingForecast {2} - autoscaling
CloudDirectory.GetAppliedSchemaVersion {2} - clouddirectory
CloudDirectory.UpgradeAppliedSchema {2} - clouddirectory
CloudDirectory.UpgradePublishedSchema {2} - clouddirectory
CloudFormation.ActivateType {2} - cloudformation
CloudFormation.BatchDescribeTypeConfigurations {2} - cloudformation
CodePipeline.GetActionType {2} - codepipeline
CodePipeline.UpdateActionType {2} - codepipeline
CognitoIdentityServiceProvider.RevokeToken {2} - cognitoidp
DynamoDB.DescribeEndpoints {2} - dynamodb
EC2.AssociateTrunkInterface {2} - ec2
EC2.DescribeSecurityGroupRules {2} - ec2
EC2.DescribeTrunkInterfaceAssociations {2} - ec2
EC2.DisassociateTrunkInterface {2} - ec2
EC2.ModifySecurityGroupRules {2} - ec2
ElasticBeanstalk.UpdateTagsForResource {2} - elasticbeanstalk
EMR.SetVisibleToAllUsers {2} - elasticmapreduce
S3.DeleteBucketIntelligentTieringConfiguration {2} - s3
S3.ListBucketIntelligentTieringConfigurations {2} - s3
S3.WriteGetObjectResponse {2} - s3
S3Control.CreateAccessPointForObjectLambda {2} - s3outposts
S3Control.CreateJob {2} - s3outposts
S3Control.DeleteAccessPointForObjectLambda {2} - s3outposts
S3Control.DeleteAccessPointPolicyForObjectLambda {2} - s3outposts
S3Control.DeletePublicAccessBlock {2} - s3outposts
S3Control.DescribeJob {2} - s3outposts
S3Control.GetAccessPointConfigurationForObjectLambda {2} - s3outposts
S3Control.GetAccessPointForObjectLambda {2} - s3outposts
S3Control.GetAccessPointPolicyForObjectLambda {2} - s3outposts
S3Control.GetAccessPointPolicyStatusForObjectLambda {2} - s3outposts
S3Control.GetPublicAccessBlock {2} - s3outposts
S3Control.ListAccessPointsForObjectLambda {2} - s3outposts
S3Control.ListJobs {2} - s3outposts
S3Control.PutAccessPointConfigurationForObjectLambda {2} - s3outposts
S3Control.PutAccessPointPolicyForObjectLambda {2} - s3outposts
S3Control.PutBucketLifecycleConfiguration {2} - s3outposts
S3Control.PutPublicAccessBlock {2} - s3outposts
SSM.UnlabelParameterVersion {2} - ssm
Glue.UpdateColumnStatisticsForPartition {2} - glue
Glue.UpdateColumnStatisticsForTable {2} - glue
SageMaker.SendPipelineExecutionStepFailure {2} - sagemaker
SageMaker.SendPipelineExecutionStepSuccess {2} - sagemaker
ServiceDiscovery.UpdateHttpNamespace {2} - servicediscovery
ServiceDiscovery.UpdatePrivateDnsNamespace {2} - servicediscovery
ServiceDiscovery.UpdatePublicDnsNamespace {2} - servicediscovery
QuickSight.CreateFolder {2} - quicksight
QuickSight.CreateFolderMembership {2} - quicksight
QuickSight.DeleteFolder {2} - quicksight
QuickSight.DeleteFolderMembership {2} - quicksight
QuickSight.DescribeFolder {2} - quicksight
QuickSight.DescribeFolderPermissions {2} - quicksight
QuickSight.DescribeFolderResolvedPermissions {2} - quicksight
QuickSight.ListFolderMembers {2} - quicksight
QuickSight.ListFolders {2} - quicksight
QuickSight.SearchFolders {2} - quicksight
QuickSight.UpdateFolder {2} - quicksight
QuickSight.UpdateFolderPermissions {2} - quicksight
DataSync.UpdateLocationNfs {2} - datasync
DataSync.UpdateLocationObjectStorage {2} - datasync
DataSync.UpdateLocationSmb {2} - datasync
KinesisAnalyticsV2.DescribeApplicationVersion {2} - kinesisanalytics
KinesisAnalyticsV2.RollbackApplication {2} - kinesisanalytics
KinesisAnalyticsV2.UpdateApplicationMaintenanceConfiguration {2} - kinesisanalytics
ApiGatewayManagementApi.DeleteConnection {2} - apigateway
ApiGatewayManagementApi.GetConnection {2} - apigateway
ApiGatewayManagementApi.PostToConnection {2} - apigateway
MediaPackageVod.ConfigureLogs {2} - mediapackagevod
IoTEvents.StartDetectorModelAnalysis {2} - iotevents
WorkMailMessageFlow.PutRawMessageContent {2} - workmailmessageflow
SSO.GetRoleCredentials {2} - sso
SSO.ListAccountRoles {2} - sso
SSO.ListAccounts {2} - sso
SSO.Logout {2} - sso
SSOOIDC.CreateToken {2} - ssodirectory
SSOOIDC.RegisterClient {2} - ssodirectory
SSOOIDC.StartDeviceAuthorization {2} - ssodirectory
ConnectParticipant.CompleteAttachmentUpload {2} - executeapi
ConnectParticipant.CreateParticipantConnection {2} - executeapi
ConnectParticipant.DisconnectParticipant {2} - executeapi
ConnectParticipant.GetAttachment {2} - executeapi
ConnectParticipant.GetTranscript {2} - executeapi
ConnectParticipant.SendEvent {2} - executeapi
ConnectParticipant.SendMessage {2} - executeapi
ConnectParticipant.StartAttachmentUpload {2} - executeapi
Kendra.BatchGetDocumentStatus {2} - kendra
IoTSiteWise.GetInterpolatedAssetPropertyValues {2} - iotsitewise
IoTSiteWise.PutStorageConfiguration {2} - iotsitewise
CustomerProfiles.MergeProfiles {2} - profile
LexModelsV2.CreateResourcePolicyStatement {2} - lex
LexModelsV2.DeleteResourcePolicyStatement {2} - lex
LexRuntimeV2.RecognizeUtterance {2} - lex
Finspacedata.CreateChangeset {2} - finspacedata
Finspacedata.GetProgrammaticAccessCredentials {2} - finspacedata
Finspacedata.GetWorkingLocation {2} - finspacedata
Proton.AcceptEnvironmentAccountConnection {2} - proton
Proton.CreateEnvironmentAccountConnection {2} - proton
Proton.CreateEnvironmentTemplateVersion {2} - proton
Proton.CreateServiceTemplateVersion {2} - proton
Proton.DeleteEnvironmentAccountConnection {2} - proton
Proton.GetEnvironmentAccountConnection {2} - proton
Proton.RejectEnvironmentAccountConnection {2} - proton
Proton.UpdateEnvironmentAccountConnection {2} - proton
EMR.AddInstanceFleet {1}
EMR.AddInstanceGroups {1}
EMR.ModifyInstanceGroups {1}
CostExplorer.CreateAnomalyMonitor {1}
CostExplorer.CreateCostCategoryDefinition {1}
CostExplorer.UpdateCostCategoryDefinition {1}
`;

var found_permissions = [];

function transformArn(arn) {
    return arn
        .replace(/PN/g, "$\{")
        .replace(/XX/g, "}")
        .replace(/pn/g, "$\{")
        .replace(/xx/g, "}")
        .replace(/774857101424/g, "${Account}")
        .replace(/us-east-1/g, "${Region}")
        .replace(/arn:aws/g, "arn:${Partition}");
}

async function go() {
    var known_permissions = {};
    var iamdefdata = await fetch('https://raw.githubusercontent.com/iann0036/iam-dataset/main/iam_definition.json');
    iamdef = await iamdefdata.json();

    for (var iamdefitem of iamdef) {
        for (var priv of iamdefitem.privileges) {
            known_permissions[iamdefitem.prefix+":"+priv.privilege] = (priv.access_level == "Unknown");
        }
    }
    
    for (let test_item of long_undocumented_test_list.split("\n")) {
        test_item = test_item.split(" ")[0];
        if (test_item != "") {
            let split_test_item = test_item.split(".");
            let svc = new AWS[split_test_item[0]]({});
            let method = split_test_item[1][0].toLowerCase() + split_test_item[1].substr(1);

            let complete = false;
            let params = {};
            let iterations = 0;
            let last_param = null;

            while (!complete) {
                try {
                    console.log("--\n" + method);
                    console.log(params);
                    await svc[method].call(svc, params).promise();
                    complete = true;
                } catch (err) {
                    if (err.message) {
                        if (err.message.includes("not authorized to perform: ")) {
                            console.log(err.message);
                            let match = err.message.match(/not authorized to perform: ([a-zA-Z0-9-:]+)(?: on resource: (.+))?/);
                            let permission = match[1];
                            let resource = match[2];

                            found_permissions.push({
                                'permission': permission,
                                'resource': resource || null,
                                'service': split_test_item[0],
                                'method': split_test_item[1]
                            });
                            complete = true;
                        } else {
                            if (err.message.includes("Missing required key '")) {
                                let paramname = err.message.match(/Missing required key '(.+)'/)[1];
                                params[paramname] = "PN"+paramname+"XX";
                                last_param = paramname;
                            } else if (err.message.includes(" to be an Array")) {
                                params[last_param] = [];
                            } else if (err.message.includes(" to be a structure")) {
                                params[last_param] = {};
                            } else if (err.message.includes(" to be a number")) {
                                params[last_param] = 1;
                            } else if (err.message.includes(" to be a boolean")) {
                                params[last_param] = false;
                            } else {
                                console.log(err.message);
                                complete = true;
                            }
                        }
                    } else {
                        complete = true;
                    }
                }
                iterations += 1;
                if (iterations > 20) {
                    complete = true;
                }
            }
        }
    }

    console.log(found_permissions);

    let res = {};
    for (let item of found_permissions) {
        if (!Object.keys(known_permissions).includes(item['permission'])) {
            res[item['service'] + "." + item['method']] = [{
                "action": item['permission'],
                "undocumented": true
            }];
            if (item['resource']) {
                res[item['service'] + "." + item['method']][0]['arn_override'] = {
                    "template": transformArn(item['resource'])
                };
            }
        } else {
            if (!known_permissions[item['permission']]) {
                console.log("Invalid hit: " + item['permission']);
            } else {
                res[item['service'] + "." + item['method']] = [{
                    "action": item['permission'],
                    "undocumented": true
                }];
                if (item['resource']) {
                    res[item['service'] + "." + item['method']][0]['arn_override'] = {
                        "template": transformArn(item['resource'])
                    };
                }
            }
        }
    }

    console.log(JSON.stringify(res, null, 4));
}

go();
