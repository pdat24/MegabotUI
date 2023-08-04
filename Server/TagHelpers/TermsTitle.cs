using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Server;
public class TermTitle : TagHelper
{
    public string? className { get; set; } = "";
    public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "h3";
        output.Attributes.SetAttribute("class", "term-body-title");
        output.Content.SetHtmlContent(
            $"""
                <img src="/imgs/Terms/title-effect2.svg" alt="photo">
                <span>{(await output.GetChildContentAsync()).GetContent()}</span>
            """
        );
    }
}