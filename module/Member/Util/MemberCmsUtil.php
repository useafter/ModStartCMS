<?php


namespace Module\Member\Util;


use ModStart\Core\Assets\AssetsUtil;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Field\AutoRenderedFieldValue;

class MemberCmsUtil
{
    
    public static function showFromId($memberUserId)
    {
        $memberUser = ModelUtil::getWithCache('member_user', ['id' => $memberUserId]);
        return self::show($memberUser);
    }

    
    public static function show($memberUser)
    {
        if (!empty($memberUser)) {
            return AutoRenderedFieldValue::make('<a href="javascript:;" class="ub-icon-text" data-dialog-request="' . action('\\Module\\Member\\Admin\\Controller\\MemberController@show', ['_id' => $memberUser['id']]) . '">
            <img class="icon" src="' . AssetsUtil::fixOrDefault($memberUser['avatar'], 'asset/image/avatar.png') . '" />
            <span class="text">' . htmlspecialchars($memberUser['username']) . '</span></a>');
        }
        return AutoRenderedFieldValue::make('');
    }
}
