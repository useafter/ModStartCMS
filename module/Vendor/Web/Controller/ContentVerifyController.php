<?php


namespace Module\Vendor\Web\Controller;


use Illuminate\Routing\Controller;
use ModStart\App\Web\Layout\WebPage;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\InputPackage;
use ModStart\Form\Form;
use Module\Vendor\Provider\ContentVerify\ContentVerifyProvider;

class ContentVerifyController extends Controller
{
    public function index(WebPage $page, $name)
    {
        $provider = ContentVerifyProvider::get($name);
        BizException::throwsIfEmpty('数据异常', $provider);
        $param = InputPackage::buildFromInputJson('param')->all();
        $record = $provider->record($param);
        BizException::throwsIfEmpty('记录不存在', $record);
        $form = Form::make('');
        $ret = $provider->buildForm($form, $record);
        if (null !== $ret) {
            return $ret;
        }
        return view('module::Vendor.View.contentVerify.index', [
            'content' => $form->render(),
            'pageTitle' => '审核 · ' . $provider->title(),
        ]);
    }
}