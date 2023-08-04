using Microsoft.AspNetCore.Razor.TagHelpers;
namespace Server.TagHelpers;
public class ArrowLink : TagHelper
{
    public string Href { get; set; } = "";
    public string Text { get; set; } = "";
    public string? TextClass { get; set; } = "";
    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "a";
        output.Attributes.SetAttribute("href", Href);
        output.Attributes.SetAttribute("class", "arrow-link");
        output.Content.SetHtmlContent($"""
            <div>
                <i class="fa-solid fa-arrow-right"></i>
            </div> 
            <div class={TextClass}>{Text}</div>
        """);
    }
}