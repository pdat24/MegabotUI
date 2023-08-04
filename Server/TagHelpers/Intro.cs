using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Server.TagHelpers;
public class Intro : TagHelper
{
    public string img { get; set; } = "";
    public string title { get; set; } = "";
    public string desc { get; set; } = "";
    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "div";
        output.Attributes.SetAttribute("class", "intro-section");
        output.Content.SetHtmlContent($"""
            <div class="row align-items-center w-100">
                <div class="col-lg-6">
                    <div class="fs-4 color-primary" >
                        <img src="/imgs/Terms/breadcrumb-title.png" class="header-breadcrumb" alt="img">
                        <span class="text">{title}</span>
                    </div>
                    <p class="light-text intro-section-desc">
                        <i class="fa-solid fa-minus icon"></i>
                        <span>{desc}</span>
                    </p>
                </div>
                <div class="col-lg-6 text-center ai-learning">
                    <img src="{img}" alt="photo">
                </div>
            </div>
        """);
    }
}